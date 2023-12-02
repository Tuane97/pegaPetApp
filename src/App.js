// import logo from './logo.svg'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import {HOME_ROUTE} from './constants'
import {Home} from './ui/screens/home/home.screen'
import {OngList} from './ui/screens/ongs/ongs.screen'

function App() {
	return (
		<Routes>
			{/* <Route path="/" element={<Login />} />
			<Route path="/register" element={<Register />} /> */}
			<Route
				path={HOME_ROUTE}
				element={
					// <PrivateRoute>
					<Home />
					// </PrivateRoute>
				}
			/>
			<Route
				path={'/ongList'}
				element={
					// <PrivateRoute>
					<OngList />
					// </PrivateRoute>
				}
			/>
		</Routes>
	)

	{
		/* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); */
	}
}

export default App
