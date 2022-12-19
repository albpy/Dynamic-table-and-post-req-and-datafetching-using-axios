import React,{useState,useEffect} from 'react' 		//useState
import axios from 'axios'

function Getdata(){							//whats the difference betweer const and function


	const [data,setData] = useState([])
	const getReqresdata = async ()=>{
	const retaliation = await axios.get('https://reqres.in/api/users')		//because js is intrepreted it will run the rest of the code before axios fetch data, to prevent this we will use async function
	.then(res=>res)
	setData(retaliation.data.data)
 // 	console.log(data);},[])
}
console.log(data)

	
	return(
				//why if return is empty it will return unexpected token
		<div className = 'getdata'>
		I USER
			<div>
			<button onClick={getReqresdata}>ghghgetreqresgata</button>	
				<div>
				{data.map((people, index)=>{
					return(
					<div key={index}>
						<h2>id:{people.id}</h2>
						<h2>email:{people.email}</h2>
						<h3>name:{people.first_name} {people.last_name}</h3>
						<img src ={people.avatar} />
						<hr />
					</div>
					)
				})
				}
				</div>
			</div>
		</div>
		)

}
export default Getdata




///displays axios get data from getReqresdata 