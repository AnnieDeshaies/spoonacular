import styled from 'styled-components'

const StyledCard = styled.div`
	border: 1px solid black;
  width: fit-content;
  padding: 32px;
}
`

const RecipeCard = (recipe) => (
	<StyledCard>
		<h2>{recipe.title}</h2>
		<img src={recipe.image} alt={recipe.title} />
	</StyledCard>
)

export default RecipeCard
