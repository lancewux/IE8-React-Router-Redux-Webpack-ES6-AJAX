import React from 'react'
import FilterItem from 'src/components/person/FilterItem'

const FilterBar = () => (
	<p>
		SHow:{' '}
		<FilterItem filter="ALL">All</FilterItem>
		{', '}
		<FilterItem filter="PASSED">Passed</FilterItem>
	</p>
)

export default FilterBar