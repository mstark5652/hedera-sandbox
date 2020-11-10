const options = require('./options')
const { Client } = require('@hashgraph/sdk')

if (!options.accountId || !options.privateKey) {
  throw new Error('Must have valid account id and private key in environment variables.')
}

const HederaClient = Client.forTestnet()
HederaClient.setOperator(options.accountId, options.privateKey)

module.exports = HederaClient
