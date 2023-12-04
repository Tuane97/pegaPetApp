import './header.css'
import logo from '../../../utils/images/logo-temporario.png'
import {Link /*, useNavigate*/} from 'react-router-dom'
// import {useEffect, useState} from 'react'
// import {useGlobalUser} from '../../../context'
// import {useSecurityApi} from '../../../hooks'
import imageDefault from '../../../utils/images/profile-default.png'

export const Header = () => {
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

	const handleLogout = async () => {
		// await securityApi.logout()
		// localStorage.removeItem('user')
		// setGlobalUser({})
		// navigate('/')
	}

	return (
		<div className="header">
			<Link className="header__logo" to={'/home'}>
				<img className="logo" src={logo} alt="logo" />
				PegaPet
			</Link>
			<div className="header__logout-post">
				<Link to={"/userAccount"} className='header__logout-post logo-user'>
					<img src={imageDefault} alt="profile" />
				</Link>
				<button className="logout-button" onClick={handleLogout}>
					Logout
				</button>
			</div>
		</div>
	)
}
