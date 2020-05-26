var express = require('express')

var app = express()
const cors = require('cors')
app.use(cors())

const userInfo = {
   status: 200,
   msg: 'success',
   data: [
      {
         userName: 'xiaoming',
         age: 18,
      },
      {
         userName: 'mingming',
         age: 18,
      },
   ],
}

let whiteList = ['http://localhost:3000']
let corsOptions = {
   origin: (origin, callback) => {
      if (whiteList.indexOf(origin) !== -1) {
         callback(null, true)
      } else {
         callback(new Error('Not allowed by CORS'))
      }
   },
   credentials: true,
}

app.get('/api/userInfo', cors(corsOptions), function(req, res, next) {
   setTimeout(() => {
      res.send(JSON.stringify(userInfo.data))
   }, 1000)
})

app.listen(8080, function() {
   console.log('listening on port 8080')
})
