import './App.css';
import { useState } from 'react';
import { quotes } from './quotes';
import twitterLogo from './twitter_rounded.png'

const App = () => {
	const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

	const NewQuote = () => {
		setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
	};

	return (
		<div id='App'>
			<div id='quoteBox'>
				<div id='text'>
					<p>"{quote.quote}"</p>
				</div>

				<div id='author'>
					<h4><em>{quote.author}</em></h4>
				</div>
			</div>

			<div id="footer">
				<div id='twitterContainer'>
					<a id='tweet-quote' target='_blank' href={`https://twitter.com/intent/tweet?related=freecodecamp&text=${quote.quote} ${quote.author}`}>
						<img id='twitterLogo' src={twitterLogo} alt='Twitter Logo' />
					</a>
				</div>
				<div id='buttonContainer'>
					<button id='new-quote' onClick={NewQuote} >New Quote</button>
				</div>
			</div>
		</div>
	);
};

export default App;
