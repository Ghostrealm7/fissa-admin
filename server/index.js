const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3500;
const app = express()
//Allows us to send json file as client
app.use(express.json())
//Initiate CORS (CROSS ORIGIN RESOURCE SHARING) to loosen API restrictions
app.use(cors())
const db = require('./model/database')
// Routers
const employeeRouter = require('./routes/employee')
const userRouter = require('./routes/user')
const statsRouter = require('./routes/stats')
const invoiceRouter = require('./routes/invoice')
const loginRouter = require('./routes/login')

app.use('/api/employee', employeeRouter)

app.use('/api/stats', statsRouter)

app.use('/api/user', userRouter)

app.use('/api/invoice', invoiceRouter)

app.use('/login', loginRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));