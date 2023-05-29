const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 5000

const colors = require('colors')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const connectDB = require('./config/db')

connectDB()

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
  })
)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
