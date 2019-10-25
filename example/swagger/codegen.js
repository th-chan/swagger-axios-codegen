// const { codegen } = require('swagger-axios-codegen')
const { codegen } = require('../../dist/index.js')

codegen({
  methodNameMode: 'operationId',
  source: require('../swagger_petstore.json'),
  // remoteUrl: 'http://localhost:22742/swagger/v1/swagger.json',
  outputDir: './swagger/services',
  strictNullChecks: false,
  // useCustomerRequestInstance: true,
  modelMode: 'interface'
})
