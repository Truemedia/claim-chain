const Block = require('./src/block')
const Chain = require('./src/chain')
const Claim = require('./src/claim')
const Wallet = require('./src/wallet')

let chain = new Chain
let block = new Block
let claim = new Claim(['cam.jpg'], null)
let wallet = new Wallet

console.log('scores', claim.scores)