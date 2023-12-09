import {Header} from '../../components/header/header.component'
import {Sidebar} from '../../components/sidebar/sidebar.component'
import {useEffect, useState} from 'react'
import imageDefault from "../../../utils/images/profile-default.png"
import "./processCreate.style.css"
import { useGlobalUser } from '../../../context/user/user.context'
import { PROCESS_INFO_CONST } from '../../../constants'
import { useProcessAdopt } from '../../../hooks/api/processAdopt/use-process.hooks'

export const ProcessCreate = () => {
    const [ globalUser] = useGlobalUser()
	const [usuario, setUsuario] = useState([])
    const [processInfo, setProcessInfo] = useState(PROCESS_INFO_CONST)
    const processApi = useProcessAdopt()

	useEffect(() => {
		setUsuario(globalUser)
	}, [])

    const handleClick = async() => {
		console.log(processInfo)
		try {
			await processApi.addProcess(registInfo.userType, registInfo.name, registInfo.email, registInfo.address, registInfo.password, registInfo.cnpj, registInfo.nrContact, registInfo.photo, registInfo.preferences)
			setRegistInfo(REGISTRATION_INFO_CONST)
			navigate('/')
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
                                    <img src={imageDefault} alt="" />
                                </div>
                            </div>
                            <div className="profile-foto__buttons">
                                <button disabled>Johny</button>
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
                                    <button>Cancelar</button>
                                </div>
                                
                            </div>
                    </div>
				</div>
			</div>
		</>
	)
}
