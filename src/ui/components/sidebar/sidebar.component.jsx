import './sidebar.css'
import logoHome from '../../../utils/images/logo-home.png'
import logoOngs from '../../../utils/images/logo-ongs.png'
import logoSearch from '../../../utils/images/logo-search.png'
import logoAdocao from '../../../utils/images/logo-adocao.png'
import {Link /*, useNavigate*/} from 'react-router-dom'
// import {useEffect, useState} from 'react'
// import {useGlobalUser} from '../../../context'
// import {useSecurityApi} from '../../../hooks'

export const Sidebar = () => {
	// 	const [loggedUser, setLoggedUser] = useState()
	// 	const [, setGlobalUser] = useGlobalUser()
	//
	// 	const securityApi = useSecurityApi()
	// 	const navigate = useNavigate()
	//
	// 	useEffect(() => {
	// 		const user = JSON.parse(localStorage.getItem('user'))
	// 		setLoggedUser(user)
	// 	}, [])

	// const handleLogout = async () => {
	// 	// await securityApi.logout()
	// 	// localStorage.removeItem('user')
	// 	// setGlobalUser({})
	// 	// navigate('/')
	// }

	return (
		<div className="sidebar">
			<Link className="sidebar__item" to={'/home'}>
				<img className="logo-item" src={logoHome} alt="logo" />
				Home
			</Link>
			<Link className="sidebar__item" to={'/ongList'}>
				<img className="logo-item" src={logoOngs} alt="logo" />
				Ongs
			</Link>
			<Link className="sidebar__item" to={'/home'}>
				<img className="logo-item" src={logoSearch} alt="logo" />
				Pesquisar
			</Link>
			<Link className="sidebar__item" to={'/myProcess'}>
				<img className="logo-item" src={logoAdocao} alt="logo" />
				Minhas Adoções
			</Link>
		</div>
	)
}
