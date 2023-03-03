import { useContext } from 'react'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'

import { AppContext } from '../App'

const StyledPagination = styled(ReactPaginate)`
	list-style-type: none;
	display: flex;

	li {
		border: 1px solid black;
		width: fit-content;

		&:not(.break):hover:not(.disabled),
		&.selected {
			background-color: blue;
			color: white;
			cursor: pointer;
		}

		&.disabled {
			opacity: 0.4;
		}

		a {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 32px;
			min-width: 32px;
		}

		&.break a {
			pointer-events: none;
		}
	}
`

const Pagination = (data) => {
	const context = useContext(AppContext)

	const getPages = () => Math.ceil(data?.totalResults / data?.number) + 1

	const handleOnClick = (data) => context.setOffset(data.selected * 5)

	return (
		<StyledPagination
			forcePage={context.offset / 5}
			breakLabel='...'
			nextLabel='next >'
			onPageChange={handleOnClick}
			pageRangeDisplayed={5}
			pageCount={getPages()}
			previousLabel='< previous'
			renderOnZeroPageCount={null}
			marginPagesDisplayed={0}
		/>
	)
}

export default Pagination
