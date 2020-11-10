const {
  Ed25519PrivateKey, Hbar,
  AccountBalanceQuery,
  CryptoTransferTransaction,
  AccountCreateTransaction,
  Client
} = require('@hashgraph/sdk')
const HederaClient = require('./client')

const getAccountBalance = async accountId => {
  return new AccountBalanceQuery()
    .setAccountId(accountId)
    .execute(HederaClient)
}

const transferCrypto = async (senderAccountId, senderPrivateKey, recipientAccountId, amount, memo) => {
  const senderClient = Client.forTestnet()
  const privateKey = Ed25519PrivateKey.fromString(senderPrivateKey)
  senderClient.setOperator(senderAccountId, privateKey)

  const transaction = await new CryptoTransferTransaction()
    .addSender(senderAccountId, new Hbar(amount))
    .addRecipient(recipientAccountId, new Hbar(amount))
    .setTransactionMemo(memo)
    .execute(senderClient)
  const receipt = await transaction.getReceipt(senderClient)
  return receipt
}

const createNewAccount = async () => {
  const privateKey = await Ed25519PrivateKey.generate()
  const transaction = await new AccountCreateTransaction()
    .setKey(privateKey.publicKey)
    .setInitialBalance(0)
    // .setGenerateRecord //what does this do and why would it be needed?
    .execute(HederaClient)

  const receipt = await transaction.getReceipt(HederaClient)
  return {
    privateKey: privateKey.toString(),
    publicKey: privateKey.publicKey.toString(),
    status: receipt.status,
    accountId: receipt.getAccountId()
  }
}

module.exports = {
  getAccountBalance,
  transferCrypto,
  createNewAccount
}
