import { useQuery } from 'react-query'

import Loader from './Loader'
import fetchRecipe from '../api/fetchRecipe'

const RecipeInfo = (recipe) => {
	const { data, error, isError, isLoading } = useQuery(['recipe', recipe.id], () => fetchRecipe(recipe.id))

	if (isLoading) {
		return <Loader />
	}

	if (isError) {
		return <div>Error! {error.message}</div>
	}

	return (
		<div>
			<p>name: {data?.title}</p>
			<img src={data?.image} alt={data?.title} />
			<p>dairy free: {data?.dairyFree}</p>
			<p>gluten free: {data?.glutenFree}</p>
			<p>ketogenic: {data?.ketogenic}</p>
			<p>low Fodmap: {data?.lowFodmap}</p>
			<p>vegan: {data?.vegan}</p>
			<p>vegetarian: {data?.vegetarian}</p>

			<p>ingredients:</p>

			{data?.extendedIngredients?.map((ingredient, index) => (
				<div key={index}>
					<p>name: {ingredient.name}</p>
					<p>
						amount: {ingredient.amount} + unit: {ingredient.unit}
					</p>
				</div>
			))}

			{data?.analyzedInstructions[0]?.steps?.map((instruction, index) => (
				<div key={index}>
					<p>number: {instruction.number}</p>
					<p>step: {instruction.step}</p>
				</div>
			))}
		</div>
	)
}

export default RecipeInfo
