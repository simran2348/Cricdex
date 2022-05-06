import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import { database_name, password } from './Constant.js'
import User from './Schema/User.js'

/*---API Config---*/
const app = express()
const port = process.env.PORT || 8101
const connection_url = `mongodb+srv://admin:${password}@cluster0.6jf08.mongodb.net/${database_name}?retryWrites=true&w=majority`
//const connection_url = 'mongodb://localhost/localBase'

/*---Middlewares---*/
app.use(express.json())
app.use(Cors())

/*---DB Congig---*/
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

/*---API Endpoints---*/
app.get('/', (req, res) => res.status(200).send('hello theli'))

app.post('/user', (req, res) => {
  const user = req.body
  User.create(user, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
})

app.get('/user', (req, res) => {
  User.find((err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

/*---Listener---*/
app.listen(port, () => console.log(`listening on localhost: ${port}`))
