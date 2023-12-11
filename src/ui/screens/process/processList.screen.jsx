import { useEffect, useState } from "react"
import "../../components/visits/visitList.style.css"
import { ListProcess } from "./processList"
import { ProcessCard } from "../../components/process/processCard.component"
import { Header } from "../../components/header/header.component"
import { Sidebar } from "../../components/sidebar/sidebar.component"
import { useProcessAdoptApi } from "../../../hooks/api/processAdopt/use-process.hooks"
import { UserType } from "../../../utils/enums/userType.enum"
import { usePagination } from "../../../hooks/paginatio/use-pagination"
import { useUserApi } from "../../../hooks/api/user/use-user.hooks"
import { useVisitApi } from "../../../hooks/api/visit/use-visit.hooks"

export const ProcessList = (idUsuario) => {
    const [process, setProcess] = useState([])
    const [usuario, setUsuario] = useState([])    
	const {page, handleNextPage, handlePreviousPage} = usePagination()
    const processApi = useProcessAdoptApi()
    const userApi = useUserApi()

    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        const getUser = async()=>{
            const _usuario = await userApi.searchUser(user.idUsuario)
            setUsuario(_usuario)
        }
		getUser()
	}, [userApi])

	useEffect(() => {
        
        const getProcess = async()=>{
			let _process;
			if(usuario?.tipoUsuario === UserType.ONG){
				_process = await processApi.listProcessByOng(usuario?.idUsuario, page)
			} else if (usuario?.tipoUsuario === UserType.ADOTANTE){
				_process = await processApi.listProcessByAdotante(usuario?.idUsuario, page)
			}
            
            setProcess(_process?.content)
        }
		getProcess()
	}, [processApi, usuario])

    console.log("process", process);

    return (
        <>
            <Header/>
            <Sidebar/>
            <div className="processList visitList">
                <div className="processList-container">
                    {process?.length ? (
                        <table>
                            <tr className="header-table">
                                <th>Nome do Animal</th>
                                <th>Ong</th>
                                <th>Adotante</th>
                                <th>Inicio do Processo</th>
                                <th>Visita</th>
                                <th>Status</th>
                                <th>Detalhes</th>
                            </tr>
                            {process?.map((processItem, index) => (
                                <ProcessCard key={index} process={processItem} setProcess={(_process)=>setProcess(_process)} user={usuario}/>
                            ))}
                        </table>
                    ) : (
                        <h3 className="message-empty">Não há Processos a serem exibidos</h3>
                    )}
                </div>
            </div>
        </>
    )
}