import Button from './Button'

const NumberPad = ({
	text,
	setText,
	evaluated,
	setEvaluated
}) => {
	const evaluate = () => {
		setEvaluated(true)
		return null
	}

	const handleButtonClick = (e) => {
		console.log(e.target.className)
		const buttonValue = e.target.textContent
		switch (buttonValue) {
			case 'AC':
				setText('0')
				break
			case '=':
				setText(evaluate(text))
				break
			case '0':
				if (text.length > 1) {
					setText(text + '0')
					break
				} else if (text !== '0') {
					console.log(text)
					setText(text + '0')
					break
				} else {
					break
				}
			default:
				// TODO: add evaulated logic for e.target.className Numeric and Operator
				if (text.length === 1 && text === '0') {
					setText(buttonValue)
				} else {
					setText(text + buttonValue)
				}
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