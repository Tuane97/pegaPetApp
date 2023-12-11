import axios from 'axios'
import { useGlobalUser } from '../../../context/user/user.context'

export function useHttp(baseURL, headers) {
	const [, setGlobalUser] = useGlobalUser()

	const ERROR_UNAUTHORIZED = 401

	const instanceHttp = axios.create({
		baseURL,
		headers
	})
	const get = async (url, params) => {
		try {
			const response = await instanceHttp.get(url, params)

			return response.data
		} catch (error) {
			if (error.response.status === ERROR_UNAUTHORIZED) {
				setGlobalUser({})
			}

			throw error
		}
	}

	const put = async (url, data, headers) => {
		try {
			const response = await instanceHttp.put(url, data, headers)

			return response.data
		} catch (error) {
			if (error.response.status === ERROR_UNAUTHORIZED) {
				setGlobalUser({})
			}

			throw error
		}
	}

	const post = async (url, data, headers) => {
		try {
			const response = await instanceHttp.post(url, data, headers)

			return response.data
		} catch (error) {
			if (error.response.status === ERROR_UNAUTHORIZED) {
				setGlobalUser({})
			}

			throw error
		}
	}

	return {
		get,
		put,
		post
	}
}
