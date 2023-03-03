import { useState, createContext } from 'react'
import { useDebounce } from 'use-debounce'
import styled from 'styled-components'

import GlobalStyles from './styles/globalStyles'
import Recipes from './Recipes'
import SearchInput from './components/SearchInput'

const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	margin: 32px;
`

export const AppContext = createContext()

const App = () => {
	const [query, setQuery] = useState('')
	const [offset, setOffset] = useState(0)
	const debouncedQuery = useDebounce(query, 500)

	return (
		<AppContext.Provider value={{ query, setQuery, debouncedQuery, offset, setOffset }}>
			<GlobalStyles />

			<StyledHeader>
				<h1>Recipes</h1>
				<SearchInput />
			</StyledHeader>

			<Recipes />
		</AppContext.Provider>
	)
}

export default App
