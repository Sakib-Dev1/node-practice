const express = require('express')
const app = express()
// function rootCall (req,res){
//  res.send('Thank you very much')
// }
// const rootCall = (req,res) => {
//   res.send('Thank you very Much')
// }
app.get('/', (req, res) => {
  res.send('Thank you very much for calling me')
})
app.listen(3000, () => console.log('listening to port 3000'))
