import {useMemo} from 'react'
import {BASE_URL} from '../../../constants/index'
import {useHttp} from '../_base/use-http.hook'

export const useVisit = () => {
	const instanceHttp = useHttp(`${BASE_URL}/visita`)

	const search = async ({id}) => {
		const response = await instanceHttp.get(`/${id}`)
		return response
	}

	const edit = async ({id, status, observation}) => {
		const response = await instanceHttp.put(`/${id}`, {status, observation})
		return response
	}

	return useMemo(
		() => ({
			search,
			edit
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	)
}
