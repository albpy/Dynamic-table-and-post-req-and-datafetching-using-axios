import React, {useState, useEffect}from 'react'
import axios from 'axios'
import './Table.css'


const PostingForm =()=> {
	const [name, setName] = useState('')
 	const [from, setFrom] = useState('')
 	const [job, setJob] = useState('')
 	const [age, setAge] = useState('')
 	const [gender, setGender] = useState('')
 	const [data, setData] = useState([])
 
	const handle=(e)=>{
		e.preventDefault()	//prevent form from doing a post req when its handled
		console.log(name, from, job, age, gender)
		let theinput = {name, from, job, age, gender}
		if(name&&from&&job&&age&&gender){
			setData((ls)=>[...ls,theinput])
			//set the box empty
			setName('')
			setFrom('')
			setJob('')
			setAge('')
			setGender('')
		}
}
	const submit= async (e)=>{
		const reply =await axios.post('https://httpbin.org/anything',{
			nameIs:name,
			fromWas:from,
			jobIs:job,
			ageIs:age,
			genderIs:gender
		})
		.then(res =>console.log(res.data.json)).catch(err =>{console.log('err', err)})
 
 	 }
										// 	 const objToArray=Object.entries(data)
 	return(
 				<div>
				<form onSubmit={handle} >					
			 		<input onChange={(e)=>setName(e.target.value)}  id="name" value={name} autoComplete='off'  placeholder="enter a name..." />
			 		<input onChange={(e)=>setFrom(e.target.value)} id="from" value={from} autoComplete='off'  placeholder="where r u from?"/>
					<input onChange={(e)=>setJob(e.target.value)} id="job"  value={job} autoComplete='off'  placeholder= "for living" />
					<input onChange={(e)=>setAge(e.target.value)} id="age" value={age} autoComplete='off'  placeholder="Age" />
					<input onChange={(e)=>setGender(e.target.value)} id="gender" value={gender} autoComplete='off'  placeholder="gender" />
					<button onClick={submit}>submit</button>
				</form>
				<table className='table'>
 				<thead>
 				<tr>
 						<th>Name</th>
 						<th>From</th>
 						<th>Job</th>
 						<th>Age</th>
 						<th>Gender</th>
 				</tr>
				</thead>
				<tbody>
					<tr>
						<td>john doe</td>
						<td>Underthesky</td>
						<td>Drummer</td>
						<td>36</td>
						<td>male</td>
					</tr>
				{
					data.map((people, index)=>{
						return(
						<tr key = {index}>
							<td>{people.name}</td>
							<td>{people.from}</td>
							<td>{people.job}</td>
							<td>{people.age}</td>
							<td>{people.gender}</td>
						</tr>
							)
					}
					)
				}
				</tbody>
				</table>
 				</div>
 			//</div>
	)
 }


 export default PostingForm
