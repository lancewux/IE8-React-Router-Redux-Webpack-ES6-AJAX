// 展示redux的用法
import React from 'react';
import AddPerson from 'src/components/person/AddPerson'
import PersonList from 'src/components/person/PersonList'
import FilterBar from 'src/components/person/FilterBar'
import 'src/static/css/person.css'

// 也可以用Stateless Functions来创建组件
const Person = () => (
	<div>
		<div className="div-img" style={{'marginBottom': '20px'}}></div>
		<AddPerson />
		<h4 className="red">Person List:</h4>
		<PersonList/>
		<h4 className="red">Show Filter:</h4>
		<FilterBar/>
		<p style={{'marginTop': '20px'}}>
			click the button 'Add Person' to add a person name, click the names of the list to pass a person, click the show filter bar to filte
		</p>
	</div>
)

export default Person;