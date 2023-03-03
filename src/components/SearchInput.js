import { useEffect, useContext } from 'react'

import { AppContext } from '../App'

const SearchInput = () => {
	const context = useContext(AppContext)

	useEffect(() => {
		document.addEventListener('keydown', handleOnKeyDown)

		return () => {
			document.removeEventListener('keydown', handleOnKeyDown)
		}
	}, [])

	const handleOnKeyDown = (e) => {
		if (e.key === 'Enter') {
			context.setQuery(e.target.value)
		}
	}

	return (
		<input
			value={context.query}
			onChange={(e) => context.setQuery(e.target.value)}
			type='text'
			placeholder='Search...'
			name='search'
		/>
	)
}

export default SearchInput
