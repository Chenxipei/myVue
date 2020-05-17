let express = require('express');
let app = express();
let bodyParser = require('body-parser')
app.all("*",function(req,res,next){
	res.header('Access-Control-Allow-Origin','*')
	res.header('Access-Control-Allow-Headers','*')
	next();
})
app.get('/get',(req,res)=>{
	console.log(req.query)
	let json = JSON.stringify({
		"result":parseInt(req.query.a)*parseInt(req.query.b)
	})
	res.send(json)
})
app.use(bodyParser.urlencoded({extended:false}))

app.post('/post',(req,res)=>{
	console.log(req)
	console.log(req.body)
	let json = JSON.stringify({
		"result":parseInt(req.body.a)/parseInt(req.body.b)
	})
	res.send(json)
})
app.listen(1020)