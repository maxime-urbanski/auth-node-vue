import https from "https"
import fs from 'fs'
import mongoose from "mongoose";
import * as dotenv from 'dotenv'
import express from 'express'
import router from "./router/index.js";

dotenv.config()
const MONGODB_URL = process.env.DATABASE_URL
const MONGODB_DB = process.env.DATABASE_NAME

const app = express()
const port = 5050

app.use(express.static('public'))
app.use(express.urlencoded({extended: true, limit: '3mb'}))

app.get('/', (req, res) => res.sendfile(`$(__dirname)/index.html`))

app.use('/api', router)

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}

try {
  await mongoose.connect(`mongodb://${MONGODB_URL}/${MONGODB_DB}`)
  console.log('Connexion database ok')
  https.createServer(options, app).listen(port, console.log(`Server sur le port ${port}`));
} catch (e) {
  console.log('error mongoose', e)
}

