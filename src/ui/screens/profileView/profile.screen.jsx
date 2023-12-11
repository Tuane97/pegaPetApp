import { useEffect, useState } from "react"
import "./profile.style.css"
import { UserType } from "../../../utils/enums/userType.enum"
import { AnimalList } from "../../components/animals/animalList.component"
import { VisitList } from "../../components/visits/visitList.component"
import { Header } from "../../components/header/header.component"
import { Sidebar } from "../../components/sidebar/sidebar.component"
import { useUserApi } from "../../../hooks/api/user/use-user.hooks"
import imageDefault from "../../../utils/images/profile-default.png"
import plusIcon from "../../../utils/images/plus_icon.png"

export const Profile = ({isViewer}) => {
	const [usuario, setUsuario] = useState([])
    const userApi = useUserApi()

	useEffect(() => {
        let user;
        if(isViewer){
            user = JSON.parse(localStorage.getItem("userProfile"))
            
        } else {
            user = JSON.parse(localStorage.getItem("user"))
        }
        try{
            const getUser = async()=>{
                const _usuario = await userApi.searchUser(user?.idUsuario)
                localStorage.setItem("userProfile", JSON.stringify(user))
                setUsuario(_usuario)
            }
            getUser()
        }catch(error){
            console.log(error);
        }
        
	}, [userApi, isViewer])


    var _item = "";

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
                                <img src={usuario.foto || imageDefault} alt="" />
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
                                <p className="profile-info__data">{usuario?.contatos?.map(item =>{
                                    _item = item.nrContato + " / "
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
                                <img src={usuario?.foto || imageDefault} alt="" />
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
                    <p className="title-visit">Visitas</p>
                    <VisitList />
                </div>
                <div className="profile-info all-width">
                    <div className="div-animal">
                        <p className="title-animal">Animais</p>
                        <button className="button-animal">
                            <img src={plusIcon} alt="" />
                        </button>                        
                    </div>
                    
                    <AnimalList />
                </div>
            </div>
		</div>
        </>
	)
}