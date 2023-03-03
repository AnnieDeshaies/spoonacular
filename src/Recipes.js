import { useContext, useState } from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'

import { AppContext } from './App'
import RecipeCard from './components/RecipeCard'
import RecipeInfo from './components/RecipeInfo'
import Pagination from './components/Pagination'
import Loader from './components/Loader'
import fetchRecipes from './api/fetchRecipes'

const StyledGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const Recipes = () => {
	const [currentRecipe, setCurrentRecipe] = useState()

	const context = useContext(AppContext)

	const { data, error, isError, isLoading } = useQuery(['recipes', context.debouncedQuery, context.offset], () =>
		fetchRecipes(context.debouncedQuery, context.offset)
	)

	if (isLoading) {
		return <Loader />
	}

	if (isError) {
		return <div>Error! {error.message}</div>
	}

	return (
		<div>
			<h1>Recipes</h1>
			{currentRecipe && <RecipeInfo {...currentRecipe} />}
			<StyledGrid>
				{Object.values(data?.results).map((recipe, index) => (
					<div key={index} onClick={() => setCurrentRecipe(recipe)}>
						<RecipeCard {...recipe} />
					</div>
				))}
			</StyledGrid>
			<Pagination {...data} />
		</div>
	)
}

export default Recipes
