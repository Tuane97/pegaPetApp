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
        const user = JSON.parse(localStorage.getItem("userProfile"))
        const getUser = async()=>{
            const _usuario = await userApi.searchUser(user.idUsuario)
            setUsuario(_usuario)
        }
		getUser()
	}, [userApi])

	console.log("Animal component, user:", usuario);

	useEffect(() => {
        
        const getAnimal = async()=>{
			let _animals;
			if(usuario?.tipoUsuario === UserType.ONG){
				console.log("é ONG");
				_animals = await animalApi.listAnimalByOng(usuario?.idUsuario, page)
			} else if (usuario?.tipoUsuario === UserType.ADOTANTE){
				console.log("é Adotante");
				_animals = await animalApi.listAnimalByAdotante(usuario?.idUsuario, page)
			}
			console.log("Animal component, animal useEfect:", _animals?.content);
            setAnimals(_animals?.content)
        }
		getAnimal()
	}, [animalApi, usuario])

	console.log("Animal component, animal:", animals);

    return (
        <div className="animalList">
            {animals?.length ? (
				<div>
					{animals?.map((animal, index) => (
						<AnimalCard key={index} animal={animal} />
					))}
				</div>
			) : (
				<h3 className="message-empty">Não há Animais a serem exibidas</h3>
			)}
        </div>
    )}