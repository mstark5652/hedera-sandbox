const HederaClient = require('./client')
const { AccountBalanceQuery } = require('@hashgraph/sdk')

const getBalance = async (accountId) => {
  const balance = await new AccountBalanceQuery()
    .setAccountId(accountId)
    .execute(HederaClient)
  console.log(`${HederaClient._operatorAccount} balance = ${balance.value()}`)
}


if (process.argv && process.argv.length > 2 && process.argv[2]) {
  getBalance(process.argv[2])
} else {
  console.error('please provide account id as argument')
}

