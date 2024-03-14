const fs = require('fs')
const { v4: uuidv4 } = require('uuid')

const readFile = () => {
  const time = new Date
  try {
    const readData = fs.readFileSync('data.json', 'utf8')
    console.log(`[${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}] Content read successfully!`)

    return {
      ok: true,
      status: 200,
      action: 'READ',
      data: JSON.parse(readData)
    }
  } catch (err) {
    console.error(`[${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}] Error reading file: ${err}`)

    return {
      ok: false,
      status: 500, 
      action: 'READ',
      data: []
    }
  }
}

const getTasks = (req, res) => {

  const data = readFile()
  
  if(!data.ok) res.json({ ok: false, status: 500, action: 'READ', error: "Error reading tasks" })
  
  res.json( data )
}


const addNewTask = (req, res) => {
  const data = readFile().data

  const newTask = { id: uuidv4(), task: req.params.task }
  
  // Content to write
  const content = [...data, newTask]

  // Write to file
  fs.writeFile('data.json', JSON.stringify(content), (err) => {

    const time = new Date
    if (err) {
      console.error(`[${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}] Error writing task to file: ${err}`)
      res.json({ ok: false, status: 500, action: 'CREATE', error: "Error writing task to file" })
    }
    console.log(`[${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}] Task written to file successfully!`)
  })


  res.json({ ok: true, status: 200, action: 'CREATE', task: newTask })
}


const deleteTask = (req, res) => {
  const data = readFile().data
  
  // Content to write
  const content = data.filter(item => item.id != req.params.taskid)

  const contentDeleted = data.filter(item => item.id == req.params.taskid)[0]

  if(!contentDeleted) res.json({ ok: false, status: 400, action: 'DELETE', error: "Task not found" })

  // Write to file
  fs.writeFile('data.json', JSON.stringify(content), (err) => {
    const time = new Date
    if (err) {
      console.error(`[${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}] Error deleting task: ${err}`)
      res.json({ ok: false, status: 500, action: 'DELETE', error: "Error deleting task from file" })
    }
    console.log(`[${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}] Task deleted from file successfully!`)
  })


  res.json({ ok: true, status: 200, action: 'DELETE', task: contentDeleted })
}


const updateTask = (req, res) => {

  const data = readFile().data
  
  const content = data.filter(item => item.id != req.params.taskid)

  const contentToBeUpdated = data.filter(item => item.id == req.params.taskid)[0]

  if(!contentToBeUpdated) res.json({ ok: false, status: 400, action: 'UPDATE', error: "Task not found" })

  const oldContent = contentToBeUpdated

  const newContent = {...contentToBeUpdated, task: req.params.newtask}

  fs.writeFile('data.json', JSON.stringify([...content, contentToBeUpdated]), (err) => {
    const time = new Date
    if (err) {
      console.error(`[${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}] Error updating task: ${err}`)
      res.json({ ok: false, status: 500, action: 'UPDATE', error: "Error updating task from file" })
    }
    console.log(`[${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}] Task updated from file successfully!`)
  })


  res.json({ ok: true, status: 200, action: 'UPDATE', task: newContent, updatedTask: oldContent })
}

module.exports = { getTasks, addNewTask, deleteTask, updateTask }