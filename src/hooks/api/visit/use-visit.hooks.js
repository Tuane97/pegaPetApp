import {useMemo} from 'react'
import {BASE_URL} from '../../../constants/index'
import {useHttp} from '../_base/use-http.hooks'

export const useVisitApi = () => {
	const instanceHttp = useHttp(`${BASE_URL}/visita`)

	const search = async ({id}) => {
		const response = await instanceHttp.get(`/${id}`)
		return response
	}

	const listVisit = async (idUsuario, userType, page) => {
		const response = await instanceHttp.get(`/${idUsuario}/${userType}/list`,
		 {params: {size: 10, page}})
		return response
	}

	const edit = async (id, status, observacao) => {
		const response = await instanceHttp.put(`/${id}`, {status, observacao})
		return response
	}

	return useMemo(
		() => ({
			search,
			edit,
			listVisit
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	)
}
