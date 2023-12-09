import {useState} from 'react'

import {useNavigate} from 'react-router-dom'
import {RegistLoginForm} from '../../components/regist-login-form/regist-login-form.components'
import {LOGIN_INFO_CONST} from '../../../constants/login-info-const.constants'
import {useSecurityApi} from '../../../hooks/api/security/use-security.hooks'
import { useGlobalUser } from '../../../context/user/user.context'

export const LoginScreen = () => {
	const [loginInfo, setLoginInfo] = useState(LOGIN_INFO_CONST)
	const [ , setGlobalUser] = useGlobalUser()

	const navigate = useNavigate()

	const securityApi = useSecurityApi()

	const handleSubmit = async event => {
		event.preventDefault()
		try {
			const user = await securityApi.login(loginInfo.email, loginInfo.password)
			setGlobalUser(user)
			navigate('/home')
		} catch (error) {
			console.log(error)
		}
	}

	const handleChangeInput = event => {
		const {name, value} = event.target
		setLoginInfo(currentValue => ({...currentValue, [name]: value}))
	}

	return <RegistLoginForm handleSubmit={handleSubmit} handleChange={handleChangeInput} value={loginInfo} />
}
