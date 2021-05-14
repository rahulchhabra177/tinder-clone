const express =  require('express')
const mongoose =  require('mongoose')
const Cards= require ('./dbCards.js');
const Cors=require('cors');
//APp config
const app=express();
const port=4000;
const connection_url='mongodb+srv://rahul-chhabra:MnqakJPa2RXoYWxd@cluster0.mv9on.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
//Middleeawere
app.use(express.json());
app.use(Cors());
//db config
mongoose.connect(connection_url,{
	useNewUrlParser:true,
	useCreateIndex:true,
	useUnifiedTopology:true	,
});
//APi Endpoints
app.get("/",(req,res)=> res.status(200).send("Hello Ji! NAmaste"));
app.get("/namaste",(req,res)=> res.status(200).send("Hello Ji! Not NAmaste"));
app.post("/tinder/cards/",(req,res)=>{
	const dbCard=req.body;
	Cards.create(dbCard,(err,data)=>{
		if (err){
			res.status(500).send(err);
		}
		else{
			res.status(201).send(data);
		}
	})
});

app.get("/tinder/cards/",(req,res)=>{
	Cards.find((err,data)=>{
		if (err){
			res.status(500).send(err);
		}
		else{
			res.status(200).send(data);
		}
	})
});


//Listener

app.listen(port,()=> console.log('listening on port no\n\n'));