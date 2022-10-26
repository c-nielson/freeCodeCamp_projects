import './App.css';
import { useState } from 'react';
import { quotes } from './quotes';
import twitterLogo from './twitter_rounded.png';

const App = () => {
	const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

	const NewQuote = () => {
		setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
	};

	return (
		<div id='App'>
			<div id='quote-box'>
				<div id='text'>
					<p>"{quote.quote}"</p>
				</div>

				<div id='author'>
					<h4><em>{quote.author}</em></h4>
				</div>
			</div>

				<div id='footer'>
					<a id='tweet-quote' target='_blank'
					   href={`https://twitter.com/intent/tweet?related=freecodecamp&text=${quote.quote} ${quote.author}`}>
						<img id='twitterLogo' src={twitterLogo} alt='Twitter Logo' />
					</a>

					<button id='new-quote' onClick={NewQuote}>New Quote</button>
				</div>
		</div>
	);
};

export default App;
