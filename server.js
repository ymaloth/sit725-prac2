const express = require('express')

let app=express()
let app2=express()

app.use(express.static('public'))


let addition=function(num1, num2){
    let result=num1+num2;
    return result;
}

app.get('/addition',function(request,response){
    let myResult=addition(10,9);
    response.send('Addition= '+myResult);
});

// start the server on port 3000
app.listen(3000)
