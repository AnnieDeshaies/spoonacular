import { useQuery } from 'react-query'
import fetchRecipes from './api/fetchRecipes'

const Recipes = () => {
	const { data, error, isError, isLoading } = useQuery('recipes', fetchRecipes)

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
