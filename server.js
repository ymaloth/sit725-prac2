const express = require('express')

let app=express()
let app2=express()

app.use(express.static('public'))


let addition=function(num1, num2){
    let result=num1+num2;
    return result;
}

let accounts= [
    {id:1, name: 'alex', deposit:5},
    {id:2, name: 'sarah', deposit:5},
    {id:3, name: 'jim', deposit:15}
]

app.get('/addition',function(request,response){
    let myResult=addition(10,9);
    response.send('Addition= '+myResult);
});

app.get('/array',function(request,response){
    response.send(
        accounts.map(person => 
          `<h1>${person.id}</h1>
          <h1>${person.name}</h1>
          <h1>${person.deposit}</h1><br>
          `
        ).join(' ')
    )
});

// start the server on port 3000
app.listen(3000)
