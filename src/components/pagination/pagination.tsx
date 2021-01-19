import React, {useState, useMemo} from 'react'
import classNames from "classnames";

interface PaginationProps {
	defaultCurrent: number;
	total: number;
	pageSize: number;
}

const baseClass = 'rc-pagination'
function Pagination(props: PaginationProps) {
	const {defaultCurrent, total, pageSize} = props;
	const barMaxSize = 5;
	const [current, setCurrent] = useState(defaultCurrent);
	const [state, setState] = useState<Array<number>>([]);

	const totalPage = useMemo(() => {
		const number = Math.ceil(total / pageSize)
		if (number > barMaxSize) {
			const tmp = new Array(barMaxSize).fill(1).map((x, i) => i + 1)
			setState(tmp)
			const arr = calculateMove(current);
			if (arr) {
				setState(arr)
			}
		} else {
			const tmp = new Array(number).fill(1).map((x, i) => i + 1)
			setState(tmp)
			const arr = calculateMove(current);
			if (arr) {
				setState(arr)
			}
		}

		return number
	}, [pageSize, total]);

	function calculateMove (current: number): number[] | null {
		let arr = new Array(5).fill(current).map((x, i) => x + i - 2)
		// 解决前后越界
		if (arr[0] < 1) {
			const x = 1 - arr[0]
			arr = arr.map((n) => n + x)
		}

		if (arr[4] >= total) {
			const x = arr[4] - total
			arr = arr.map((n) => n - x)
		}

		return arr
	}


	return (
		<ul className={baseClass}>
			<li className={`${baseClass}-prev ${baseClass}-item`}>&lt;</li>
			{state.map((s, i) => {
				return (
					<li key={i}
						onClick={() => {
							setCurrent(s)
							const arr = calculateMove(s);
							if (arr) {
								setState(arr);
							}
						}}
						className={`${baseClass}-item ${s === current ? 'active' : ''}`}
					>
						{s}
					</li>
				);
			})}
			<li className={`${baseClass}-next ${baseClass}-item`}>&gt;</li>
		</ul>
	)
}

Pagination.defaultProps = {
	defaultCurrent : 1,
	pageSize: 10
}

export default Pagination;