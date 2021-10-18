import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Posts from './pages/Posts';

function App() {
	return (
		<div className="App">
			<Router basename="/">
				{
					<Switch>
						<Route path="/" exact component={Posts} />
					</Switch>
				}
			</Router>
		</div>
	);
}

export default App;
