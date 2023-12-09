import './resgister-user.screen.css'
import {useState} from 'react'
import {REGISTRATION_INFO_CONST} from '../../../constants/regist-info-const.constants'
import {useSecurityApi} from '../../../hooks/api/security/use-security.hooks'
import {useNavigate} from 'react-router-dom'
import {RegistLoginForm} from '../../components/regist-login-form/regist-login-form.components'

export const ResgisterUser = () => {
	const [registInfo, setRegistInfo] = useState(REGISTRATION_INFO_CONST)

	const navigate = useNavigate()

	const securityApi = useSecurityApi()

	const handleSubmit = async event => {
		event.preventDefault()
		
		try {
			await securityApi.addUser(registInfo.userType, registInfo.name, registInfo.email, registInfo.address, registInfo.password, registInfo.cnpj, registInfo.nrContact, registInfo.photo, registInfo.preferences)
			setRegistInfo(REGISTRATION_INFO_CONST)
			navigate('/')
		} catch (error) {
			console.log(error)
		}
	}

	const handleChangeInput = event => {
		const {name, value} = event.target
		setRegistInfo(currentValue => ({...currentValue, [name]: value}))
	}

	return <RegistLoginForm handleSubmit={handleSubmit} handleChange={handleChangeInput} value={registInfo} isRegister={true} />
}
