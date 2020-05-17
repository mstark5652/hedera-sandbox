const options = require('./options')
const { Client } = require('@hashgraph/sdk')

const HederaClient = new Client({
  network: { [options.network]: options.networkNode },
  operator: {
    account: options.account,
    privateKey: options.privateKey
  }
})

module.exports = HederaClient
