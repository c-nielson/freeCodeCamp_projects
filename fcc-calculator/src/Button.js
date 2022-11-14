const Button = ({ buttonText, buttonType }) => {
	let className = `button ${buttonType}`
	if (buttonText === '0' || 'AC') className += ' button-wide'
	if (buttonText === '=') className += ' button-tall'

	return (
		<div className={className}>{buttonText}</div>
	)
}

export default Button