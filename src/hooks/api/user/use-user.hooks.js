import {useMemo} from 'react'
import {BASE_URL} from '../../../constants/index'
import {useHttp} from '../_base/use-http.hook'

export const useUserApi = () => {
    const instanceHttp = useHttp(`${BASE_URL}/usuario`)

	const searchUser = async ({id}) => {
		const response = await instanceHttp.get(`/${id}`)
		return response
	}

	const searchByName = async (searchText) => {
		const response = await instanceHttp.get(`/buscar`, {params: {text: searchText}})
		return response
	}

	const desactivateUser = async ({id}) => {
		return instanceHttp.put(`/${id}/desativar`)
	}

	return useMemo(
		() => ({
			searchByName,
			searchUser,
			desactivateUser
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	)
}
