import React ,{useState,useEffect}from 'react';
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
const axios=require('./axios');

function TinderCards() {
	const [people, setpeople] = useState([]);
	useEffect(()=>{
		async function fetchData(){
			const req=await axios.get('/tinder/cards');
			setpeople(req.data);
		}
		fetchData();
	},[]);
	console.log("Started...\n");
	console.log(people);
	console.log("Ended...\n\n");
	const swiped=(direction,nametoDelete)=>{
		console.log("removing:"+nametoDelete);
	}
	const outOfFrame=(name)=>{console.log(name+" left the screen");} 
	return (
		<div className="TinderCards">
		<div className="Tinder_card_container">

			{people.map((person)=>(
				<TinderCard 
				className="swipe" 
				key={person.name}
				preventSwipe={["up","down"]} 
				onSwipe={(dir)=>swiped(dir,person.name)}
				onCardLeftScreen={()=>outOfFrame(person.name)}
				>
 <div className="card" style={{backgroundImage: "url("+person.url+")"}}>

<h3>{person.name}</h3>
 </div>
				</TinderCard>
			))
			
			}
		</div>

		</div>
	)
}

export default TinderCards