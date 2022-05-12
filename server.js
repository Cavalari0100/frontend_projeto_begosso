const express = require('express')

const app = express()

const baseDir = `${__dirname}/build/`
app.use(express.static(`${baseDir}`))
app.get('*', (req,res) => res.sendFile('index.html' , { root : baseDir }))

const port = 9261

app.listen(port, () => console.log(`Servidor subiu com sucesso em http://192.168.8.235:${port}`))


