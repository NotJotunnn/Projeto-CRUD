const express = require('express')
const { getTasks, addNewTask, deleteTask, updateTask } = require('./function')

const PORT = 3000

const app = express()

app.use((req, res, next) => {
  const time = new Date
  console.log(`[${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}] ${req.method} ${req.url}`)

  next()
})

app.get('/', (req, res) => getTasks(req, res))

app.get('/newtask/:task', (req, res) => addNewTask(req, res))

app.get('/deletetask/:taskid', (req, res) => deleteTask(req, res))

app.get('/updatetask/:taskid/:newtask', (req, res) => updateTask(req, res))


app.listen(PORT, () => console.log(`Server is now listening on port localhost:${PORT}`))