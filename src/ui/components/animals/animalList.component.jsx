import { useEffect, useState } from "react"
import { AnimalCard } from "./animalCard.component"
import { useAnimalApi } from "../../../hooks/api/animal/use-animal.hooks"
import { UserType } from "../../../utils/enums/userType.enum"
import { usePagination } from "../../../hooks/paginatio/use-pagination"
import { useUserApi } from "../../../hooks/api/user/use-user.hooks"

export const AnimalList = () =>{
    const [animals, setAnimals] = useState([])
	const [usuario, setUsuario] = useState([])
	const {page, handleNextPage, handlePreviousPage} = usePagination()
	const animalApi = useAnimalApi()
	const userApi = useUserApi()

	useEffect(() => {
        const userId = parseInt(localStorage.getItem("userProfile"))
        const getUser = async()=>{
            const _usuario = await userApi.searchUser(userId)
            setUsuario(_usuario)
        }
		getUser()
	}, [userApi])

	useEffect(() => {
        
        const getAnimal = async()=>{
			let _animals;
			if(usuario?.tipoUsuario === UserType.ONG){
				_animals = await animalApi.listAnimalByOng(usuario?.idUsuario, page)
			} else if (usuario?.tipoUsuario === UserType.ADOTANTE){
				_animals = await animalApi.listAnimalByAdotante(usuario?.idUsuario, page)
			}
            
            setAnimals(_animals)
        }
		getAnimal()
	}, [animalApi, usuario])

    return (
        <div className="animalList">
            {animals?.length ? (
				<div>
					{animals?.map(animal => (
						<AnimalCard key={animal?.id}  loggedUser={usuario} animal={animal} />
					))}
				</div>
			) : (
				<h3 className="message-empty">Não há Animais a serem exibidas</h3>
			)}
        </div>
    )}