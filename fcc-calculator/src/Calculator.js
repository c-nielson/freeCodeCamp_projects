import { useState } from 'react'
import Display from './Display'
import NumberPad from './NumberPad'

const Calculator = () => {
	const [state, setState] = useState('0')

	return (
		<div className="calculator">
			<Display text={state} />
			<NumberPad text={state} setText={setState} />
		</div>
	)
}

export default Calculator