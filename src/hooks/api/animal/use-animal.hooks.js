import {useMemo} from 'react'
import {BASE_URL} from '../../../constants/index'
import {useHttp} from '../_base/use-http.hooks'

export const useAnimalApi = () => {
    const instanceHttp = useHttp(`${BASE_URL}/animal`)

    const addAnimal = async (ongId, nome, idade, raca, foto, adotado, caracteristicas) => {
        const response = await instanceHttp.post('/', {ongId, nome, idade, raca, foto, adotado, caracteristicas})
        return response
    }

    const search = async ({id}) => {
        const response = await instanceHttp.get(`/${id}`)
        return response
    }

    const edit = async ({id, ongId, nome, idade, raca, foto, adotado, caracteristicas}) => {
        const response = await instanceHttp.put(`/${id}`, {ongId, nome, idade, raca, foto, adotado, caracteristicas})
        return response
    }

    const listAllDisp = async (page) => {
		const response = await instanceHttp.get(`/disponiveis`, {params: {size: 10, page}})
        localStorage.setItem("postTotalPage", response.totalPages)
		return response
	}

    const listAnimalByOng = async (ongId, page) => {
		const response = await instanceHttp.get(`/${ongId}/ong`, {params: {size: 10, page}})
        localStorage.setItem("animalOngTotalPage", response.totalPages)
		return response
    }

    const listAnimalByAdotante = async (adotanteId, page) => {
		const response = await instanceHttp.get(`/${adotanteId}/adotante`, {params: {size: 10, page}})
        localStorage.setItem("AnimalAdoptedTotalPage", response.totalPages)
		return response
	}

    return useMemo(
        () => ({
            addAnimal,
            search,
            edit,
            listAllDisp,
            listAnimalByOng,
            listAnimalByAdotante
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    )  
}  
