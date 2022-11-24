const Button = ({ buttonText, buttonType, buttonClicked }) => {

	return (
		<div className={`button-component ${buttonType}`} id={`button${buttonText}`} onClick={buttonClicked}>
			{buttonText}
		</div>
	)
}

export default Button