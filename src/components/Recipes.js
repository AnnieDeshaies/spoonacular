import { useContext } from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'

import { AppContext } from '../App'
import RecipeCard from './RecipeCard'
import Pagination from './Pagination'
import Loader from './Loader'
import SearchInput from './SearchInput'
import recipeAgent from '../api/recipeAgent'

const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	margin: 32px;
`

const StyledGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const Recipes = () => {
	const context = useContext(AppContext)

	const { data, error, isError, isLoading } = useQuery(['recipes', context.debouncedQuery, context.offset], () =>
		recipeAgent.getRecipes(context.debouncedQuery, context.offset)
	)

	if (isLoading) {
		return <Loader />
	}

	if (isError) {
		return <div>Error! {error.message}</div>
	}

	return (
		<>
			<StyledHeader>
				<h1>Recipes</h1>
				<SearchInput />
			</StyledHeader>

			<StyledGrid>
				{Object.values(data?.results).map((recipe, index) => (
					<RecipeCard key={index} {...recipe} />
				))}
			</StyledGrid>
			<Pagination {...data} />
		</>
	)
}

export default Recipes
