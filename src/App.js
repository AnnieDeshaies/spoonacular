import { useState, createContext } from 'react'
import { useDebounce } from 'use-debounce'
import styled from 'styled-components'

import GlobalStyles from './styles/globalStyles'
import Recipes from './Recipes'
import SearchInput from './components/SearchInput'

const StyledLayout = styled.div`
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

			<StyledLayout>
				<SearchInput />
				<Recipes />
			</StyledLayout>
		</AppContext.Provider>
	)
}

export default App
