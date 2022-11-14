import Button from './Button'

const NumberPad = () => {
	const buttonList = [
		{
			buttonType: 'AC',
			buttonList: [
				{buttonText: 'AC'}
			]
		},
		{
			buttonType: 'Equals',
			buttonList: [
				{buttonText: 'Equals'}
			]
		},
		{
			buttonType: 'Operator',
			buttonList: [
				{buttonText: '/'},
				{buttonText: 'X'},
				{buttonText: '-'},
				{buttonText: '+'}
			]
		},
		{
			buttonType: 'Numeric',
			buttonList: [
				{buttonText: '0'},
				{buttonText: '1'},
				{buttonText: '2'},
				{buttonText: '3'},
				{buttonText: '4'},
				{buttonText: '5'},
				{buttonText: '6'},
				{buttonText: '7'},
				{buttonText: '8'},
				{buttonText: '9'},
				{buttonText: '.'}
			]
		}
	]

	const renderedButtons = []
	buttonList.forEach(obj => {
		obj.buttonList.forEach(text => renderedButtons.push(<Button buttonText={text.buttonText} buttonType={obj.buttonType} />))
	})

	return (
		<div className="calcWrapper">
			{renderedButtons}
		</div>
	)
}

export default NumberPad