import axios from 'axios'

const API_KEY = '?apiKey=c5f415708aaf43ee9dbe0d33af7e66b7'
const API_URL = `https://api.spoonacular.com/recipes`
const MAX_RESULTS = 5

const recipeAgent = {
	getRecipe: async (id) => {
		const { data } = await axios.get(`${API_URL}/${id}/information${API_KEY}`)
		return data
	},
	getRecipes: async (query, offset) => {
		const { data } = await axios.get(
			`${API_URL}/complexSearch${API_KEY}&number=${MAX_RESULTS}&query=${query[0]}&offset=${offset}`
		)
		return data
	}
}

export default recipeAgent
