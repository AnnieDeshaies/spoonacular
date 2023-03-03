import { useContext } from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'

import { AppContext } from './App'
import RecipeCard from './components/RecipeCard'
import fetchRecipes from './api/fetchRecipes'

const StyledGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
`

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

			<StyledGrid>
				{Object.values(data?.results).map((recipe, index) => {
					return <RecipeCard key={index} {...recipe} />
				})}
			</StyledGrid>
		</div>
	)
}

export default Recipes
