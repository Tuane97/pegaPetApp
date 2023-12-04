import { useEffect, useState } from "react"
import "../../components/visits/visitList.style.css"
import { ListProcess } from "./processList"
import { ProcessCard } from "../../components/process/processCard.component"
import { Header } from "../../components/header/header.component"
import { Sidebar } from "../../components/sidebar/sidebar.component"

export const ProcessList = (idUsuario) => {
    const [process, setProcess] = useState([])

    useEffect(() => {
		const _process = ListProcess()
		setProcess(_process)
	}, [])

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
                            {process?.map(processItem => (
                                <ProcessCard key={processItem?.id} /*loggedUser={loggedUser}*/ process={processItem} />
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