import { useState } from 'react'
import Display from './Display'
import NumberPad from './NumberPad'

const Calculator = () => {
	const [state, setState] = useState('0')



	return (
		<div>
			<Display state={state} />
			<NumberPad setState={setState} />
		</div>
	)
}

export default Calculator