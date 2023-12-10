import { useEffect, useState } from "react"
import "./profile.style.css"
import { UserType } from "../../../utils/enums/userType.enum"
import { AnimalList } from "../../components/animals/animalList.component"
import { VisitList } from "../../components/visits/visitList.component"
import { Header } from "../../components/header/header.component"
import { Sidebar } from "../../components/sidebar/sidebar.component"
import { useUserApi } from "../../../hooks/api/user/use-user.hooks"
import imageDefault from "../../../utils/images/profile-default.png"

export const Profile = ({isViewer}) => {
	const [usuario, setUsuario] = useState([])
	const [contact, setcontact] = useState([])
    const userApi = useUserApi()

	useEffect(() => {
        const userId = parseInt(localStorage.getItem("userProfile"))
        const getUser = async()=>{
            const _usuario = await userApi.searchUser(userId)
            setUsuario(_usuario)
            setcontact(usuario?.contato)
        }
		getUser()
	}, [userApi])

    var _item;

	return (
        <>
        <Header />
		<Sidebar />
		<div className="profile">
            <div className="profile-container">
                {!isViewer && <div className="personal-data">
                    <div className="profile-foto">
                        <div className="profile__imagem">
                            <div className="inner">
                                <img src={imageDefault} alt="" />
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
                                <p className="label">Nome</p>
                                <p className="profile-info__data">{usuario?.nome}</p>
                                <p className="label">Email</p>
                                <p className="profile-info__data">{usuario?.email}</p>
                                {usuario?.tipoUsuario === UserType.ONG && <>
                                <p className="label">CNPJ</p>
                                <p className="profile-info__data">{usuario?.cnpj}</p></>}
                            </div>
                            <p>Informações de Contato</p>
                            <div>
                                <p className="label">Contato</p>
                                <p className="profile-info__data">{contact?.map(item =>{
                                    _item = item + " / "
                                    return _item})}</p>
                                <p className="label">Endereço</p>
                                <p className="profile-info__data">{usuario?.endereco}</p>
                            </div>
                            
                        </div>
                </div>}
                {isViewer && 
                <div className="personal-data">
                    <div className="profile-foto">
                        <div className="profile__imagem">
                            <div className="inner">
                                <img src={usuario?.foto} alt="" />
                            </div>
                        </div>
                    </div>
                        <div className="profile-info isViewer">
                            <h3>{usuario?.nome}</h3>
                            {usuario?.tipoUsuario === UserType.ONG && 
                            <div>
                                <p>Email: {usuario?.email}</p>
                                <p>CNPJ: {usuario?.cnpj}</p>
                            </div>}
                            {usuario?.tipoUsuario === UserType.ADOTANTE && 
                            <div>
                                <p>Email: {usuario?.email}</p>
                                <p>Minhas preferências: {usuario?.preferencias}</p>
                            </div>}
                        </div>
                </div>}
                {usuario?.tipoUsuario === UserType.ADOTANTE  && !isViewer && 
                <div className="profile-info all-width">
                    <p>Preferências</p>
                    <div>
                        <p  className="label">Minhas Preferências</p>
                        <p className="profile-info__data preferencias">{usuario?.preferencias}</p>
                    </div>
                </div>
                }
                <div className="profile-info all-width">
                    <p>Visitas</p>
                    <VisitList />
                </div>
                <div className="profile-info all-width">
                    <p>Animais</p>
                    <AnimalList />
                </div>
            </div>
		</div>
        </>
	)
}