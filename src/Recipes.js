import { useContext } from 'react'
import { useQuery } from 'react-query'

import { AppContext } from './App'
import fetchRecipes from './api/fetchRecipes'

const Recipes = () => {
	const context = useContext(AppContext)

	const { data, error, isError, isLoading } = useQuery(['recipes', { query: context.debouncedQuery }], () =>
		fetchRecipes(context.debouncedQuery)
	)

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (isError) {
		return <div>Error! {error.message}</div>
	}

	return (
		<div>
			<h1>Recipes</h1>
			{Object.values(data).map((recipe, index) => {
				return <li key={index}>{JSON.stringify(recipe)}</li>
			})}
		</div>
	)
}

export default Recipes
