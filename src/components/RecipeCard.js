import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledCard = styled(Link)`
	text-decoration: none;
	color: black;
	max-width: 380px;
	width: fit-content;
	min-height: 352px;
	margin: 16px;
	padding: 32px;
	border-radius: 16px;
	border: 2px #767676 inset;

	&:hover {
		border-color: #015ecc;
		cursor: pointer;
	}

	&:active,
	&:focus {
		outline: -webkit-focus-ring-color auto 1px;
	}
`

const StyledTitle = styled.h2`
	max-width: 312px;
`

const RecipeCard = (recipe) => (
	<StyledCard tabIndex={0} to={`/recipe/${recipe.id}`}>
		<StyledTitle>{recipe.title}</StyledTitle>
		<img src={recipe.image} alt={recipe.title} />
	</StyledCard>
)

export default RecipeCard
