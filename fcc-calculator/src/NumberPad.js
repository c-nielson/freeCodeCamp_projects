import { useState } from 'react'
import Button from './Button'

const NumberPad = ({
	text,
	setText
}) => {
	const [evaluated, setEvaluated] = useState(false)

	const multiply = (eqn) => {
		const match = eqn.match(/(\d+\.?\d*)X(\d+\.?\d*)/)
		if (match === null) {
			return eqn
		}
		return multiply(
			eqn.replace(
				match[0],
				parseFloat((
					+match[1] * +match[2]
				).toFixed(3))
			)
		)
	}

	const divide = (eqn) => {
		const match = eqn.match(/(\d+\.?\d*)\/(\d+\.?\d*)/)
		if (match === null) {
			return eqn
		}
		return multiply(
			eqn.replace(match[0],
				parseFloat((
					+match[1] / +match[2]
				).toFixed(3))
			)
		)
	}

	const add = (eqn) => {
		const match = eqn.match(/(\d+\.?\d*)\+(\d+\.?\d*)/)
		if (match === null) {
			return eqn
		}
		console.log(match[0])
		return multiply(
			eqn.replace(
				match[0],
				parseFloat((
					+match[1] + +match[2]
				).toFixed(3))
			)
		)
	}

	const subtract = (eqn) => {
		const match = eqn.match(/(\d+\.?\d*)-(\d+\.?\d*)/)
		if (match === null) {
			return eqn
		}
		return multiply(
			eqn.replace(
				match[0],
				parseFloat((
					+match[1] - +match[2]
				).toFixed(3))
			)
		)
	}

	const pipe = (eqn, ...funcs) => funcs.reduce(
		(arg, fn) => fn(arg),
		eqn
	)

	const evaluate = (text) => {
		return pipe(
			text,
			multiply,
			divide,
			add,
			subtract
		)
	}

	const handleButtonClick = (e) => {
		console.log(e.target.className)
		const buttonValue = e.target.textContent

		switch (e.target.className.split(' ')[1]) {
			case 'AC':
				setEvaluated(false)
				setText('0')
				break

			case 'Equals':
				setText(evaluate(text))
				setEvaluated(true)
				break

			case 'Operator':
				// TODO: Need to add logic for negative numbers
				setEvaluated(false)
				setText(
					(
						text + buttonValue
					)
						.replace(/[+-/X]([+-/X])/, '$1')
				)
				break

			case 'Numeric':
				if (evaluated) {
					setText(buttonValue)
					setEvaluated(false)
				} else {
					setText(
						(
							text + buttonValue
						)
							.replace(/(?<=![0-9\.]|^)0+(\d+)/, '$1')
							.replace(/\.{2,}/, '.')
							.replace(/(\d*\.\d+)\./, '$1')
					)
				}
				break

			default:
				break
		}
	}

	const buttonList = [
		{
			buttonType: 'AC',
			buttonList: [
				{ buttonText: 'AC' }
			]
		},
		{
			buttonType: 'Equals',
			buttonList: [
				{ buttonText: '=' }
			]
		},
		{
			buttonType: 'Operator',
			buttonList: [
				{ buttonText: '/' },
				{ buttonText: 'X' },
				{ buttonText: '-' },
				{ buttonText: '+' }
			]
		},
		{
			buttonType: 'Numeric',
			buttonList: [
				{ buttonText: '0' },
				{ buttonText: '1' },
				{ buttonText: '2' },
				{ buttonText: '3' },
				{ buttonText: '4' },
				{ buttonText: '5' },
				{ buttonText: '6' },
				{ buttonText: '7' },
				{ buttonText: '8' },
				{ buttonText: '9' },
				{ buttonText: '.' }
			]
		}
	]

	const renderedButtons = []
	buttonList.forEach(obj => {
		obj.buttonList.forEach(text => renderedButtons.push(
			<Button
				buttonText={text.buttonText}
				buttonType={obj.buttonType}
				buttonClicked={handleButtonClick}
			/>))
	})

	return (
		<div className="numPad">
			{renderedButtons}
		</div>
	)
}

export default NumberPad