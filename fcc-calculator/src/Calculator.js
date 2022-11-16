import { useState } from 'react'
import Display from './Display'
import NumberPad from './NumberPad'

const Calculator = () => {
	const [state, setState] = useState('0')
	const [evaluated, setEvaluated] = useState(false)

	return (
		<div className="calculator">
			<Display text={state} />
			<NumberPad text={state} setText={setState} evaluated={evaluated} setEvaluated={setEvaluated} />
		</div>
	)
}

export default Calculator