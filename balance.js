const args = require('st-cl-parser')()
const { getAccountBalance } = require('./src/account')

const getBalance = async accountId => {
  const balance = await getAccountBalance(accountId)
  console.log('balance', +balance)
  process.exit(0)
}

if (args && args.accountId) {
  getBalance(args.accountId)
} else {
  console.error('please provide account id as argument')
}
