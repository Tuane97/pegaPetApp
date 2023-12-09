// import logo from './logo.svg'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import {HOME_ROUTE} from './constants'
import {Home} from './ui/screens/home/home.screen'
import {OngList} from './ui/screens/ongs/ongs.screen'
import { Profile } from './ui/screens/profileView/profile.screen'
import { Ong } from './ui/screens/profileView/ong'
import { OngViewer } from './ui/screens/profileView/ong copy'
import { useEffect, useState } from 'react'
import { ProcessList } from './ui/screens/process/processList.screen'
import { ProcessCreate } from './ui/screens/processCreate/processCreate.screen'
import { LoginScreen } from './ui/screens/login/login.screen'
import { ResgisterUser } from './ui/screens/register-user/registerUser.screen'
import { UserGlobalProvider } from './context/user/user.context'


function App() {
	const [usuario, setUsuario] = useState([])
	const [usuarioViewer, setUsuarioViewer] = useState([])
	

	useEffect(() => {
		const ong = Ong()
		const ongViewer = OngViewer()
		setUsuario(ong)
        setUsuarioViewer(ongViewer)
	}, [])

	console.log("app----->", usuario)
	console.log("app viewer----->", usuarioViewer)

	return (
		<UserGlobalProvider>
		<Routes>
			<Route path="/" element={<LoginScreen />} />
			<Route path="/register" element={<ResgisterUser />} />
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
			<Route
				path={'/ongProfile'}
				element={
					// <PrivateRoute>
					<Profile user= {usuarioViewer} isViewer={true} />
					// </PrivateRoute>
				}
			/>
			<Route
				path={'/userAccount'}
				element={
					// <PrivateRoute>
					<Profile user= {usuario} isViewer={false} />
					// </PrivateRoute>
				}
			/>
			<Route
				path={'/myProcess'}
				element={
					// <PrivateRoute>
					<ProcessList user= {usuario}/>
					// </PrivateRoute>
				}
			/>
			<Route
				path={'/createProcess'}
				element={
					// <PrivateRoute>
					<ProcessCreate user= {usuario}/>
					// </PrivateRoute>
				}
			/>
		</Routes>
		</UserGlobalProvider>
	)
}

export default App
