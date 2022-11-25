const Button = ({ buttonType, buttonId, buttonText, buttonClicked }) => {

	return (
		<div className={`button-component ${buttonType}`} id={buttonId} onClick={buttonClicked}>
			{buttonText}
		</div>
	)
}

export default Button