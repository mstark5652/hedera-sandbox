# hedera-sandbox


## Environment
| env | desc | default |
|-----|------|---------|
| ACCOUNT_ID | hedera account id | undefined |
| PRIVATE_KEY | hedera private key | undefined |

## Scripts
* balance - gets an account balance
    ```
    node balance.js --accountId=<insert-accountId>
    ```
* createNewAccount - creates new account and logs out account id and keys
    ```
    node createNewAccount.js
    ```
* transfer - transfers crypto between accounts
    ```
    node transfer.js \
        --to=<insert-accountId> \
        --from=<insert-different-accountId> \
        --fromPrivateKey=<insert-from-account-private-key> \
        --amount=<insert-number-in-hbar-to-send> \
        --memo=<insert-message>
    ```

