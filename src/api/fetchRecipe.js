import axios from 'axios'

const API_KEY = '?apiKey=c5f415708aaf43ee9dbe0d33af7e66b7'
const API_URL = `https://api.spoonacular.com/recipes`

export default async function getRecipe(id) {
	const { data } = await axios.get(`${API_URL}/${id}/information${API_KEY}`)
	return data
}
