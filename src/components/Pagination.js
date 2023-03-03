import { useContext } from 'react'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'
import { FiChevronRight, FiChevronLeft, FiMoreHorizontal } from 'react-icons/fi'

import { AppContext } from '../App'

const StyledPagination = styled(ReactPaginate)`
	list-style-type: none;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 32px;

	li {
		border: 2px #767676 solid;
		border-radius: 100%;
		margin: 4px;
		transition: all 0.2s ease-in-out;

		&:not(.break):hover:not(.disabled),
		&.selected {
			color: #015ecc;
			border-color: #015ecc;
			cursor: pointer;
		}

		&:active,
		&:focus {
			outline: -webkit-focus-ring-color auto 1px;
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

		&.break {
			border: none;

			a {
				pointer-events: none;
			}
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
			breakLabel={<FiMoreHorizontal />}
			nextLabel={<FiChevronRight />}
			onPageChange={handleOnClick}
			pageRangeDisplayed={5}
			pageCount={getPages()}
			previousLabel={<FiChevronLeft />}
			renderOnZeroPageCount={null}
			marginPagesDisplayed={0}
		/>
	)
}

export default Pagination
