const express = require('express')

let app=express()
let app2=express()

app.use(express.static('public'))


/*app.get('/',function(request,response){
    response.send('Hello world')
})*/

// start the server on port 3000
app.listen(3000)
