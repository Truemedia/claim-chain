const Banana = require('./src/Banana')
const BananaCoin = require('./src/BananaCoin')
const Claim = require('./src/claim')
const Wallet = require('./src/wallet')

let chain = new BananaCoin
let block = new Banana
let claim = new Claim(['cam.jpg'], null)
let wallet = new Wallet

console.log('scores', claim.scores)