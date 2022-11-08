const dailySalesSchema = {
    type: 'object',
    properties: {
      date: {
        type: 'string',
      },
      charges: {
        type: 'number',
        default: 0.00
      },
      isBalanced: {
        type: 'boolean',
        default: false,
      },
    },
  };
  
  module.exports = dailySalesSchema;