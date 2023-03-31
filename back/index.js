import https from "https"
import fs from 'fs'
import mongoose from "mongoose";
import * as dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import Router from "./router/index.js";

dotenv.config()
const MONGODB_URL = process.env.DATABASE_URL
const MONGODB_DB = process.env.DATABASE_NAME

const app = express()
const portHttps = 5050
const portHttp = 3333
const corsOption = {
  origin: 'http://localhost:5173'
}

app.use(express.json())
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true, limit: '3mb'}))
app.get('/', (req, res) => res.sendfile(`$(__dirname)/index.html`))

app.use('/api', Router)

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}

try {
  await mongoose.connect(`mongodb://${MONGODB_URL}/${MONGODB_DB}`)
  console.log('Connexion database ok')
  https.createServer(options, app).listen(portHttps, console.log(`Server sur le port ${portHttps}`));
} catch (e) {
  console.log('error mongoose', e)
}

