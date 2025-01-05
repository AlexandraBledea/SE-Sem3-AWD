const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'SE-Sem3-AWD',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

