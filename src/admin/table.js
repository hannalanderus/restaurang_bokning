import React from 'react';

const AdminTable = (props) => {
	
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th>Date</th>
							<th>Name</th>
							<th>Time</th>
							<th>Persons</th>
							<th>Email</th>
							<th>Phone</th>
						</tr>
					</thead>
					<tbody id={props.tableBody}>
					</tbody>
				</table>
			</div>
		)
	
}

export default AdminTable;