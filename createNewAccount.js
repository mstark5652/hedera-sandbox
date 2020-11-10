const { createNewAccount } = require('./src/account')

const main = async () => {
  const result = await createNewAccount()
  console.log('new account', JSON.stringify(result, null, 2))
  process.exit(0)
}

main()
