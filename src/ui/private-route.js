import {useGlobalUser} from '../context/user/user.context'
import {Navigate} from 'react-router-dom'

export const PrivateRoute = ({children}) => {
	const [user] = useGlobalUser()

	if (user.email) {
		return <>{children}</>
	}

	return <Navigate to="/" />
}