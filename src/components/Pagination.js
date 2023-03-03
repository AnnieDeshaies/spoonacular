import { useContext } from 'react'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'

import { AppContext } from '../App'

const StyledPagination = styled(ReactPaginate)`
	list-style-type: none;
	display: flex;

	a {
		padding: 8px;
		margin: 8px;
	}

	li {
		border: 1px solid black;
		width: fit-content;

		&:hover:not(.disabled),
		&.selected {
			background-color: blue;
			color: white;
			cursor: pointer;
		}

		&.disabled {
			opacity: 0.4;
		}
	}
`

const Pagination = (data) => {
	const context = useContext(AppContext)

	const getPages = () => Math.ceil(data?.totalResults / data?.number) + 1

	const handleOnClick = (data) => {
		console.log(data)
		context.setOffset(data.selected * 5)
	}

	return (
		<div>
			{JSON.stringify(data)}
			<p>Number of pages: {getPages()}</p>

			<StyledPagination
				breakLabel='...'
				nextLabel='next >'
				onPageChange={handleOnClick}
				pageRangeDisplayed={2}
				pageCount={getPages()}
				previousLabel='< previous'
				renderOnZeroPageCount={null}
			/>
		</div>
	)
}

export default Pagination
