import './header.css'
import logo from '../../../utils/images/logo-temporario.png'
import {Link,useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import imageDefault from '../../../utils/images/profile-default.png'
import { useGlobalUser } from '../../../context/user/user.context'

export const Header = () => {
	const [loggedUser, setLoggedUser] = useState()
	const [, setGlobalUser] = useGlobalUser()
	const navigate = useNavigate()
	
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'))
		setLoggedUser(user)
	}, [])
	
	const handleLogout = async () => {
		localStorage.removeItem('user')
		setGlobalUser({})
		navigate('/')
	}

	return (
		<div className="header">
			<Link className="header__logo" to={'/home'}>
				<img className="logo" src={logo} alt="logo" />
				PegaPet
			</Link>
			<div className="header__logout-post">
				<Link to={"/userAccount"} className='header__logout-post logo-user'>
					<img src={loggedUser?.urlImage || imageDefault} alt="profile" />
				</Link>
				<button className="logout-button" onClick={handleLogout}>
					Logout
				</button>
			</div>
		</div>
	)
}
