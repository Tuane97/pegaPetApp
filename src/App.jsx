import {Route, Routes} from 'react-router-dom'
import './App.css'
import {HOME_ROUTE} from './constants'
import {Home} from './ui/screens/home/home.screen'
import {OngList} from './ui/screens/ongs/ongs.screen'
import { Profile } from './ui/screens/profileView/profile.screen'
import { ProcessList } from './ui/screens/process/processList.screen'
import { ProcessCreate } from './ui/screens/processCreate/processCreate.screen'
import { LoginScreen } from './ui/screens/login/login.screen'
import { ResgisterUser } from './ui/screens/register-user/registerUser.screen'
import { UserGlobalProvider } from './context/user/user.context'
import { AnimalRegister } from './ui/screens/animalRegister/animalregister'
import { PrivateRoute } from './ui/private-route'


function App() {

	return (
		<UserGlobalProvider>
		<Routes>
			<Route path="/" element={<LoginScreen />} />
			<Route path="/register" element={<ResgisterUser />} />
			<Route
				path={HOME_ROUTE}
				element={
					<PrivateRoute>
					<Home />
					</PrivateRoute>
				}
			/>
			<Route
				path={'/ongList'}
				element={
					<PrivateRoute>
					<OngList />
					</PrivateRoute>
				}
			/>
			<Route
				path={'/ongProfile'}
				element={
					<PrivateRoute>
					<Profile isViewer={true} />
					</PrivateRoute>
				}
			/>
			<Route
				path={'/userAccount'}
				element={
					<PrivateRoute>
					<Profile isViewer={false} />
					</PrivateRoute>
				}
			/>
			<Route
				path={'/myProcess'}
				element={
					<PrivateRoute>
					<ProcessList/>
					</PrivateRoute>
				}
			/>
			<Route
				path={'/createProcess'}
				element={
					<PrivateRoute>
					<ProcessCreate/>
					</PrivateRoute>
				}
			/>
			<Route
				path={'/addAnimal'}
				element={
					<PrivateRoute>
					<AnimalRegister/>
					</PrivateRoute>
				}
			/>
		</Routes>
		</UserGlobalProvider>
	)
}

export default App
