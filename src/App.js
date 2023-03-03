import { useState, createContext } from 'react'
import { useDebounce } from 'use-debounce'

import GlobalStyles from './styles/globalStyles'
import Recipes from './Recipes'
import SearchInput from './components/SearchInput'

export const AppContext = createContext()

const App = () => {
	const [query, setQuery] = useState('')
	const debouncedQuery = useDebounce(query, 500)

	return (
		<AppContext.Provider value={{ query, setQuery, debouncedQuery }}>
			<GlobalStyles />
			<SearchInput />
			<Recipes />
		</AppContext.Provider>
	)
}

export default App
