
import PostingForm from './Form'
import './Table.css'

//const datas = PostingForm.newdata
const Table=()=>{
	return(
		<div id="Table">
			<table>
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
					<tr>
						<td>john wic</td>
						<td>kolkatta</td>
						<td>farmer</td>
						<td>45</td>
						<td>male</td>
					</tr>
					<tr>
						<td>Indiana Jhones</td>
						<td>temple of the sun</td>
						<td>film artist</td>
						<td>50</td>
						<td>male</td>
					</tr>
					<tr>
						<td>chris</td>
						<td>sanfrancisco</td>
						<td>Stock brocker</td>
						<td>38</td>
						<td>male</td>
					</tr>	
				</tbody>
			</table>
		</div>

		)

}

export default Table
