import React, { useState, PropsWithChildren, useMemo } from 'react'
import classNames from "classnames";

interface RadioProps {
	data: Array<string>,
	defaultIndex?: number,
	callback?: (arr: Array<boolean>) => void,
	className?: string,
	disableIndex?: Array<number>,
} 


function Radio(props: PropsWithChildren<RadioProps>) {
	const { data, disableIndex, callback, className, defaultIndex} = props;
	const disabledRef = useMemo(() => {
		const arr = new Array(data.length).fill(false)
		if (disableIndex) {
			disableIndex.forEach(v => arr[v] = true)
		}
		return arr;
	}, [data.length, disableIndex]);

	const classes = classNames("rc-radio-wrapper", className);
	const [state, setState] = useState(() => {
		return new Array(data.length).fill(false).map((v, i) => {
			if (i === defaultIndex) return true
		})
	})

	const handleInputClick = (index: number) => {
		if (!disableIndex || !disableIndex[index]) {
			const newState = new Array(data.length).fill(false)
			newState[index] = true
			setState(newState)
			if (callback) callback(newState)
		}
	};

	return (
		<div className={classes}>
			{
				data.map((value, index) => {
					return (
						<label 
							key={index}
							className={`rc-radio-label ${
								disabledRef[index] ? 'radio-disabled' : ''
							}`}
						>
							<input 
								type="radio"
								className="rc-radio-input"
								checked={state[index]}
								onClick={() => handleInputClick(index)}
								// eslint-disable-next-line @typescript-eslint/no-empty-function
								onChange={() => {}}
							/>
							<span className={`rc-radio-dot ${state[index] ? 'radio-active': ''}`}>
							</span>
							<span className={"rc-radio-value"}>
								{value}
							</span>
						</label>
					)
				})
			}
		</div>
	);
}


Radio.defaultProps = {
	data: [],
};

export default Radio;