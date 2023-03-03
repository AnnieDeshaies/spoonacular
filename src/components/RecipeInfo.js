import { useQuery } from 'react-query'
import styled from 'styled-components'
import { BiLeaf } from 'react-icons/bi'

import Loader from './Loader'
import fetchRecipe from '../api/fetchRecipe'

const StyledContainer = styled.div`
	margin: 32px;
`

const StyledDiets = styled.div`
	display: flex;

	svg {
		font-size: 16px;
		margin-right: 4px;
	}

	span:not(:last-of-type) {
		margin-right: 16px;
	}
`

const RecipeInfo = (recipe) => {
	const { data, error, isError, isLoading } = useQuery(['recipe', recipe.id], () => fetchRecipe(recipe.id))

	if (isLoading) {
		return (
			<StyledContainer>
				<Loader />
			</StyledContainer>
		)
	}

	if (isError) {
		return <StyledContainer>Error! {error.message}</StyledContainer>
	}

	return (
		<StyledContainer>
			<h2>{data?.title}</h2>
			<img src={data?.image} alt={data?.title} />

			<StyledDiets>
				{data?.diets.map((diet, index) => (
					<span key={index}>
						<BiLeaf />
						{diet}
					</span>
				))}
			</StyledDiets>

			<h3>Ingredients:</h3>

			{data?.extendedIngredients?.map((ingredient, index) => (
				<p key={index}>
					{ingredient.amount.toFixed(2)}&nbsp;{ingredient.unit}&nbsp;{ingredient.name}
				</p>
			))}

			<hr />

			<h3>Instructions:</h3>

			{data?.analyzedInstructions[0]?.steps?.map((instruction, index) => (
				<p key={index}>
					{instruction.number}:&nbsp;{instruction.step}
				</p>
			))}
		</StyledContainer>
	)
}

export default RecipeInfo
