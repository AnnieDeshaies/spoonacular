import axios from 'axios'

const API_KEY = 'c5f415708aaf43ee9dbe0d33af7e66b7'
const MAX_RESULTS = 5
const API_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=${MAX_RESULTS}`

export default async function fetchRecipes(query, offset) {
	const { data } = await axios.get(`${API_URL}&query=${query[0]}&offset=${offset}`)
	return data
}
