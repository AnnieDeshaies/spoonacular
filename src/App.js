import { useState, createContext } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useDebounce } from 'use-debounce'

import Recipes from './components/Recipes'
import RecipeInfo from './components/RecipeInfo'
import GlobalStyles from './styles/globalStyles'

export const AppContext = createContext()

const router = createBrowserRouter([
	{
		path: '/',
		element: <Recipes />
	},
	{
		path: '/recipe/:id',
		element: <RecipeInfo />
	}
])

const App = () => {
	const [query, setQuery] = useState('')
	const [offset, setOffset] = useState(0)
	const debouncedQuery = useDebounce(query, 500)

	return (
		<AppContext.Provider value={{ query, setQuery, debouncedQuery, offset, setOffset }}>
			<GlobalStyles />
			<RouterProvider router={router} />
		</AppContext.Provider>
	)
}

export default App
