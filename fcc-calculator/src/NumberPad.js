import { useState } from 'react'
import Button from './Button'

const NumberPad = ({
	text,
	setText
}) => {
	const [evaluated, setEvaluated] = useState(false)

	// Matches either a negative number preceded by linestart or another operator OR a positive number
	const negRegex = new RegExp(/(?<=^|\/|\+)-\d+\.?\d*/)
	const posRegex = new RegExp(/\d+\.?\d*/)
	const numberRegex = new RegExp('(' + negRegex.source + ')' + '|' + '(' + posRegex.source + ')')

	const multiply = (eqn) => {
		const match = eqn.match((
			numberRegex.source
		) + 'X' + (
			numberRegex.source
		))
		if (match === null) {
			return eqn
		}
		return multiply(
			eqn.replace(
				match[0],
				parseFloat((
					+match[1] * +match[2]
				).toFixed(5))
			)
		)
	}

	const divide = (eqn) => {
		const match = eqn.match((
			numberRegex.source
		) + '/' + (
			numberRegex.source
		))
		if (match === null) {
			return eqn
		}
		return multiply(
			eqn.replace(
				match[0],
				parseFloat((
					+match[1] / +match[2]
				).toFixed(5))
			)
		)
	}

	const add = (eqn) => {
		const match = eqn.match(
			new RegExp(numberRegex.source + '+' + numberRegex.source)
		)
		if (match === null) {
			return eqn
		}
		console.log(match[0])
		return multiply(
			eqn.replace(
				match[0],
				parseFloat((
					+match[1] + +match[2]
				).toFixed(5))
			)
		)
	}

	const subtract = (eqn) => {
		const match = eqn.match((
			numberRegex.source
		) + '-' + (
			numberRegex.source
		))
		if (match === null) {
			return eqn
		}
		return multiply(
			eqn.replace(
				match[0],
				parseFloat((
					+match[1] - +match[2]
				).toFixed(5))
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
			case 'ac':
				setEvaluated(false)
				setText('0')
				break

			case 'equals':
				setText(evaluate(text))
				setEvaluated(true)
				break

			case 'operator':
				setEvaluated(false)
				setText(
					(
						text + buttonValue
					)
						.replace(/--/, '+') // Replace double negative
						.replace(/[+-/X]([+/X])/, '$1') // Only keep second operator (excluding minus which would be a
					// negative number)
				)
				break

			case 'numeric':
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
			buttonType: 'ac',
			buttonId: 'clear',
			buttonText: 'AC'
		},
		{
			buttonType: 'equals',
			buttonId: 'equals',
			buttonText: '='
		},
		{
			buttonType: 'operator',
			buttonId: 'divide',
			buttonText: '/'
		},
		{
			buttonType: 'operator',
			buttonId: 'multiply',
			buttonText: 'X'
		},
		{
			buttonType: 'operator',
			buttonId: 'add',
			buttonText: '+'
		},
		{
			buttonType: 'operator',
			buttonId: 'subtract',
			buttonText: '-'
		},
		{
			buttonType: 'numeric',
			buttonId: 'decimal',
			buttonText: '.'
		},
		{
			buttonType: 'numeric',
			buttonId: 'zero',
			buttonText: '0'
		},
		{
			buttonType: 'numeric',
			buttonId: 'one',
			buttonText: '1'
		},
		{
			buttonType: 'numeric',
			buttonId: 'two',
			buttonText: '2'
		},
		{
			buttonType: 'numeric',
			buttonId: 'three',
			buttonText: '3'
		},
		{
			buttonType: 'numeric',
			buttonId: 'four',
			buttonText: '4'
		},
		{
			buttonType: 'numeric',
			buttonId: 'five',
			buttonText: '5'
		},
		{
			buttonType: 'numeric',
			buttonId: 'six',
			buttonText: '6'
		},
		{
			buttonType: 'numeric',
			buttonId: 'seven',
			buttonText: '7'
		},
		{
			buttonType: 'numeric',
			buttonId: 'eight',
			buttonText: '8'
		},
		{
			buttonType: 'numeric',
			buttonId: 'nine',
			buttonText: '9'
		}
	]

	const renderedButtons = buttonList.map(({
			buttonType,
			buttonId,
			buttonText
		}) =>
			<Button
				buttonType={buttonType}
				buttonId={buttonId}
				buttonText={buttonText}
				buttonClicked={handleButtonClick}
			/>
	)

	return (
		<div className="numPad">
			{renderedButtons}
		</div>
	)
}

export default NumberPad