const express = require("express");
const wikipedia = require("../utils/app");
const hbs=require('hbs')
const path=require('path')

const app = express();
const port = 3000;

const viewpath=path.join(__dirname,'../templates/views')
const publicdir=path.join(__dirname,'../public')
const partialspath=path.join(__dirname,'../templates/partials')


app.use(express.static(publicdir))
app.set('view engine','hbs')
app.set('views',viewpath)
hbs.registerPartials(partialspath)

app.get('',(req,res)=>{
    res.render('index.hbs',{
        title:'Wikipedia'
    })
})



app.get('/wikipedia/search', (req, res) => {
const address=req.query.address
console.log(address)
wikipedia(address,(error,response)=>{
    if(error){
        return res.send(error)
    }
    else
    {
        res.send(response.body.query.search)
    }
})
})
 
app.listen(port, () => {
console.log('Server is listening at http: //localhost:'+port)
})