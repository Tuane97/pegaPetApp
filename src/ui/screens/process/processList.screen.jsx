import { useEffect, useState } from "react"
import "../../components/visits/visitList.style.css"
import { ListProcess } from "./processList"
import { ProcessCard } from "../../components/process/processCard.component"
import { Header } from "../../components/header/header.component"
import { Sidebar } from "../../components/sidebar/sidebar.component"
import { useProcessAdoptApi } from "../../../hooks/api/processAdopt/use-process.hooks"
import { UserType } from "../../../utils/enums/userType.enum"
import { usePagination } from "../../../hooks/paginatio/use-pagination"

export const ProcessList = (idUsuario) => {
    const [process, setProcess] = useState([])
    const [usuario, setUsuario] = useState([])    
	const {page, handleNextPage, handlePreviousPage} = usePagination()
    const processApi = useProcessAdoptApi()

    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        setUsuario(user)
        // const getUser = async()=>{
        //     const _usuario = await userApi.searchUser(userId)
        //     setUsuario(_usuario)
        // }
		// getUser()
	}, [])

	useEffect(() => {
        
        const getProcess = async()=>{
			let _animals;
			if(usuario?.tipoUsuario === UserType.ONG){
				_animals = await processApi.listProcessByOng(usuario?.idUsuario, page)
			} else if (usuario?.tipoUsuario === UserType.ADOTANTE){
				_animals = await processApi.listProcessByAdotante(usuario?.idUsuario, page)
			}
            
            setProcess(_animals)
        }
		getProcess()
	}, [processApi, usuario])

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
                                <ProcessCard key={index} /*loggedUser={loggedUser}*/ process={processItem} />
                            ))}
                            {/* <button disabled={page === INITIAL_PAGE} onClick={handlePreviousPage}>
                                Previous Page
                            </button>
                            <button disabled={page === LAST_PAGE} onClick={handleNextPage}>
                                Next Page
                            </button> */}
                        </table>
                    ) : (
                        <h3 className="message-empty">Não há Processos a serem exibidos</h3>
                    )}
                </div>
            </div>
        </>
    )
}