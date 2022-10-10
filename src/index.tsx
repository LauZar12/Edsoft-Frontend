import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import 'bootstrap/js/dist/button';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/toast';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const SERVER_URI = process.env.REACT_APP_GRAPHQL_ENDPOINT || 'localhost:8000';

const SECURE = SERVER_URI.includes('localhost') ? '' : 's';

const client = new ApolloClient({
	uri: `http${SECURE}://${SERVER_URI}`,
	// credentials: 'include',
	cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
