import {useMemo} from 'react'
import {BASE_URL} from '../../../constants/index'
import {useHttp} from '../_base/use-http.hooks'

export const useUserApi = () => {
    const instanceHttp = useHttp(`${BASE_URL}/usuario`)

	const searchUser = async (id) => {
		const response = await instanceHttp.get(`/${id}`)
		return response
	}

	const searchByName = async (searchText, page) => {
		const response = await instanceHttp.get(`/buscar`, {params: {text: searchText, size: 10, page}})
		localStorage.setItem("usersTotalPage", response.totalPages)
		return response
	}
	

	const searchOngs = async (page) => {
		const response = await instanceHttp.get(`/buscar/ongs`, {params: {size: 10, page}})
		localStorage.setItem("ongsTotalPage", response.totalPages)
		return response
	}

	const desactivateUser = async ({id}) => {
		return instanceHttp.put(`/${id}/desativar`)
	}

	return useMemo(
		() => ({
			searchByName,
			searchUser,
			searchOngs,
			desactivateUser
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	)
}
