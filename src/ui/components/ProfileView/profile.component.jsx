import { useEffect, useState } from "react"
import { Ong } from "./ong"
import "./profile.style.css"
import { UserType } from "../../../utils/enums/userType.enum"

export const Profile = (tipoUsuario, isViewer) => {
	const [usuario, setUsuario] = useState([])
	const [contact, setcontact] = useState([])

	useEffect(() => {
		const _usuario = Ong()
		setUsuario(_usuario)
        setcontact(_usuario.contato)
	}, [])

    var _item;

	return (
		<div className="profile">
            <div className="profile-container">
                <div className="personal-data">
                    <div className="profile-foto">
                        <div className="profile__imagem">
                            <div className="inner">
                                <img src={usuario?.urlImage} alt="" />
                            </div>
                        </div>
                        <div className="profile-foto__buttons">
                            <button>Editar foto</button>
                            <button>Editar dados</button>
                        </div>
                    </div>
                        <div className="profile-info">
                            <p>Dados Pessoais</p>
                            <div>
                                <p>Nome</p>
                                <p className="profile-info__data">{usuario?.nome}</p>
                                <p>Email</p>
                                <p className="profile-info__data">{usuario?.email}</p>
                                <p>CNPJ</p>
                                <p className="profile-info__data">{usuario?.email}</p>
                            </div>
                            <p>Informações de Contato</p>
                            <div>
                                <p>Contato</p>
                                <p className="profile-info__data">{contact.map(item =>{
                                    _item = item + " / "
                                    return _item})}</p>
                                <p>Endereço</p>
                                <p className="profile-info__data">{usuario?.endereco}</p>
                            </div>
                            
                        </div>
                    
                    
                </div>
                {usuario.tipoUsuario == UserType.ADOTANTE && <div></div>}
                <div>

                </div>
                <div className="ongs-paginacao">
                    <button>{'<anterior'}</button>
                    <button>{'próximo>'}</button>
                </div>
            </div>
		</div>
	)
}