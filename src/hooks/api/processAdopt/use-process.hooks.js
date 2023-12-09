import {useMemo} from 'react'
import {BASE_URL} from '../../../constants/index'
import {useHttp} from '../_base/use-http.hooks'

export const useProcessAdopt = () => {
    const instanceHttp = useHttp(`${BASE_URL}/processoAdocao`)

    const addProcess = async (ongId, adotanteId, animalId, contato, data, hora, detalhe) => {
        const response = await instanceHttp.post('/', {ongId, adotanteId, animalId, contato, data, hora, detalhe})
        return response
    }

    const search = async ({id}) => {
        const response = await instanceHttp.get(`/${id}`)
        return response
    }

    const edit = async ({id, status, detalhes}) => {
        const response = await instanceHttp.put(`/${id}`, {status, detalhes})
        return response
    }

    const listProcessByOng = async (ongId, page) => {
		const response = await instanceHttp.get(`${ongId}`, {params: {size: 20, page}})
		return response
	}

    const listProcessByAdotante = async (adotanteId, page) => {
		const response = await instanceHttp.get(`${adotanteId}`, {params: {size: 20, page}})
		return response
	}

    return useMemo(
        () => ({
            addProcess,
            search,
            edit,
            listProcessByOng,
            listProcessByAdotante
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    )  
}  
