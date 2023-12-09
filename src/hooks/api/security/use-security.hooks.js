import {useMemo} from 'react'
import {BASE_URL} from '../../../constants/index'
import {useHttp} from '../_base/use-http.hooks'

export const useSecurityApi = () => {
	const instanceHttp = useHttp(BASE_URL)

	const addUser = async (tipoUsuario, nome, email, endereco, senha, cnpj, nrContato, foto, caracteristicasInteresse) => {
		console.log("informações de cadastro: ", tipoUsuario, nome, email, endereco, senha, cnpj, nrContato, foto, caracteristicasInteresse)
		const response = await instanceHttp.post('/cadastrar', {tipoUsuario, nome, email, endereco, senha, cnpj, nrContato, foto, caracteristicasInteresse})
		return response
	}

	const login = async (email, senha) => {
		const response = await instanceHttp.post('/login', {email, senha})
		return response
	}

	// const logout = async () => {
	// 	return instanceHttp.post('/logout')
	// }

	return useMemo(
		() => ({
			login,
			addUser
			// logout
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	)
}
