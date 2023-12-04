import {Header} from '../../components/header/header.component'
import {Sidebar} from '../../components/sidebar/sidebar.component'
// import {useEffect, useState} from 'react'
import imageDefault from "../../../utils/images/profile-default.png"
import "./processCreate.style.css"

export const ProcessCreate = ({user}) => {
	// const [usuario, setUsuario] = useState([])

	// useEffect(() => {
	// 	const _user = user
	// 	setUsuario(_user)
	// }, [])


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
                                        <input type='text' className="profile-info__data"></input>
                                        <label className="label">Contato</label>
                                        <input type='text' className="profile-info__data"></input>
                                        <div className='processCreate-info__agendamento'>
                                            <div className='processCreate-info__data-hora'>
                                                <label className="label">Data</label>
                                                <input type='date' className="profile-info__data"></input>
                                            </div>
                                            <div className='processCreate-info__data-hora'>
                                                <label className="label">Hora</label>
                                                <input type='time' className="profile-info__data"></input>
                                            </div>
                                        </div>
                                        <label className="label">Observação</label>
                                        <textarea type='text' className="profile-info__data"></textarea>
                                    </form>
                                </div>
                                <div>
                                    <button>Iniciar</button>
                                    <button>Cancelar</button>
                                </div>
                                
                            </div>
                    </div>
				</div>
			</div>
		</>
	)
}
