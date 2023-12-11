import {Header} from '../../components/header/header.component'
import {Sidebar} from '../../components/sidebar/sidebar.component'
import {useEffect, useState} from 'react'
import imageDefault from "../../../utils/images/profile-default.png"
import "./processCreate.style.css"
import { useGlobalUser } from '../../../context/user/user.context'
import { HOME_ROUTE, PROCESS_INFO_CONST } from '../../../constants'
import { useProcessAdopt, useProcessAdoptApi } from '../../../hooks/api/processAdopt/use-process.hooks'
import { useNavigate } from 'react-router-dom'

export const ProcessCreate = () => {
    const [ globalUser] = useGlobalUser()
	const [usuario, setUsuario] = useState([])
    const [postAnimal, setPostAnimal] = useState({})
    const [processInfo, setProcessInfo] = useState(PROCESS_INFO_CONST)
    const processApi = useProcessAdoptApi()
    const navigate = useNavigate();
    

	useEffect(() => {
        const _postAnimal = JSON.parse(localStorage.getItem('postAnimal'))
        setPostAnimal(_postAnimal)
		setUsuario(globalUser)
	}, [])

    const handleClick = async() => {
		try {
			await processApi.addProcess(postAnimal.ong.id, globalUser.idUsuario, postAnimal.id, processInfo.contact, processInfo.date, processInfo.hour, processInfo.observation)
			setProcessInfo(PROCESS_INFO_CONST)
			navigate(HOME_ROUTE)
		} catch (error) {
			console.log(error)
		}
	}

    const handleChangeInput = event => {
		const {name, value} = event.target
		setProcessInfo(currentValue => ({...currentValue, [name]: value}))
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
                                    <img src={postAnimal?.foto || imageDefault} alt="" />
                                </div>
                            </div>
                            <div className="profile-foto__buttons">
                                <button disabled>{postAnimal?.nome}</button>
                            </div>
                        </div>
                            <div className="processCreate-info profile-info">
                                <h3>Processo adoção - Agendar Visita</h3>
                                <div>
                                    <form>
                                        <label className="label">Nome</label>
                                        <input type='text' className="profile-info__data" value={usuario.nome} disabled></input>
                                        <label className="label" >Contato</label>
                                        <input type='text' className="profile-info__data" name= "contact" value={processInfo.contact} onChange={handleChangeInput}></input>
                                        <div className='processCreate-info__agendamento'>
                                            <div className='processCreate-info__data-hora'>
                                                <label className="label">Data</label>
                                                <input type='date' className="profile-info__data" name= "date" value={processInfo.date} onChange={handleChangeInput}></input>
                                            </div>
                                            <div className='processCreate-info__data-hora'>
                                                <label className="label">Hora</label>
                                                <input type='time' className="profile-info__data" name= "hour" value={processInfo.hour} onChange={handleChangeInput}></input>
                                            </div>
                                        </div>
                                        <label className="label">Observação</label>
                                        <textarea type='text' className="profile-info__data" name= "observation" value={processInfo.observation} onChange={handleChangeInput}></textarea>
                                    </form>
                                </div>
                                <div className= "button-form">
                                    <button onClick={() => handleClick()}>Iniciar</button>
                                    <button onClick={() => navigate(HOME_ROUTE)}>Cancelar</button>
                                </div>
                                
                            </div>
                    </div>
				</div>
			</div>
		</>
	)
}
