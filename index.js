const express = require('express')


const app = express()


// body{
//      title: string
        // description: string
//  }

// middleware
app.use(express.json())

app.get('/todos',(req,res) => {
    
})

app.post('/todo', (req,res) => {

})


// for marking a specific todo as marked done!
app.put('/completed',(req,res) => { 

})


app.listen(3000)