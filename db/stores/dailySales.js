const Datastore = require('nedb-promises');
const Ajv = require('ajv');
const dailySalesSchema = require('../schemas/dailySales');

class DailySalesStore {
    constructor() {
        const ajv = new Ajv({
            allErrors: true,
            useDefaults: true
        });

        this.schemaValidator = ajv.compile(dailySalesSchema);
        const dbPath = `${process.cwd()}/dailySales.db`;
        this.db = Datastore.create({
            filename: dbPath,
            timestampData: true,
        });
    }

    validate(data) {
        return this.schemaValidator(data);
    }

    create(data) {
        const isValid = this.validate(data);
        if (isValid) {
            return this.db.insert(data);
        }
    }

    read(_id) {
        return this.db.findOne({_id}).exec()
    }

    readAll() {
        return this.db.find()
    }

    readActive() {
        return this.db.find({isBalanced: false}).exec();
    }

    archive({_id}) {
        return this.db.update({_id}, {$set: {isBalanced: true}})
    }
}

module.exports = new DailySalesStore();