import {Header} from '../../components/header/header.component'
import {Sidebar} from '../../components/sidebar/sidebar.component'
import {useEffect, useState} from 'react'
import imageDefault from "../../../utils/images/profile-default.png"
import "../processCreate/processCreate.style.css"
import { ANIMAL_INFO_CONST, HOME_ROUTE, PROCESS_INFO_CONST } from '../../../constants'
import { useNavigate } from 'react-router-dom'
import { useUserApi } from '../../../hooks/api/user/use-user.hooks'
import { useAnimalApi } from '../../../hooks/api/animal/use-animal.hooks'

export const AnimalRegister = () => {
	const [usuario, setUsuario] = useState([])
    const [animalInfo, setAnimalInfo] = useState(ANIMAL_INFO_CONST)
    const userApi = useUserApi()
    const animalApi = useAnimalApi()
    const navigate = useNavigate();
    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))

        const getUser = async()=>{
            const _usuario = await userApi.searchUser(user?.idUsuario)
            localStorage.setItem("userProfile", JSON.stringify(user))
            setUsuario(_usuario)
        }
        getUser()
    }, [])

    const handleClick = async() => {
		try {
			await animalApi.addAnimal(usuario.idUsuario, animalInfo.name, animalInfo.age, animalInfo.race, animalInfo.photo, animalInfo.characteristics)
			setAnimalInfo(PROCESS_INFO_CONST)
			navigate(HOME_ROUTE)
		} catch (error) {
			console.log(error)
		}
	}

    const handleChangeInput = event => {
		const {name, value} = event.target
		setAnimalInfo(currentValue => ({...currentValue, [name]: value}))
	}


	return (
		<>
			<Header />
			<Sidebar />
			<div className="processCreate">
				<div className="processCreate-container">
                    <div className="personal-data">
                        <div className="profile-foto">
                            <div className="profile__imagem">
                                <div className="inner">
                                    <img src={imageDefault} alt="" />
                                </div>
                            </div>
                            <div className="profile-foto__buttons">
                                <button>Escolher foto</button>
                            </div>
                        </div>
                            <div className="processCreate-info profile-info">
                                <h3>Cadastrar animal</h3>
                                <div>
                                    <form>
                                        <label className="label">Nome</label>
                                        <input type='text' className="profile-info__data" name='name' value={animalInfo.name} onChange={handleChangeInput}></input>
                                        <label className="label" >Idade</label>
                                        <input type='text' className="profile-info__data" name= "age" value={animalInfo.age} onChange={handleChangeInput}></input>
                                        <label className="label" >Raça</label>
                                        <input type='text' className="profile-info__data" name= "race" value={animalInfo.race} onChange={handleChangeInput}></input>
                                        <label className="label">Características</label>
                                        <textarea type='text' className="profile-info__data" name= "characteristics" value={animalInfo.characteristics} onChange={handleChangeInput}></textarea>
                                    </form>
                                </div>
                                <div className= "button-form">
                                    <button onClick={() => handleClick()}>Concluir</button>
                                    <button onClick={() => navigate("/userAccount")}>Cancelar</button>
                                </div>
                                
                            </div>
                    </div>
				</div>
			</div>
		</>
	)
}
