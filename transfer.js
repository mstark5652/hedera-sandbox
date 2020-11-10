const args = require('st-cl-parser')()
const { transferCrypto } = require('./src/account')

const main = async ({ to, from, fromPrivateKey, amount, memo }) => {
  const result = await transferCrypto(from, fromPrivateKey, to, amount, memo)
  console.log('transfer result', JSON.stringify(result, null, 2))
  process.exit(0)
}

if (args && args.to && args.from) {
  console.log('args', args)
  main(args)
} else {
  console.error('please provide account id as argument')
}

