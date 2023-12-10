import { useEffect, useState } from "react"
import { VisitCard } from "./visitCard.component"
import "./visitList.style.css"
import { useVisitApi } from "../../../hooks/api/visit/use-visit.hooks"
import { usePagination } from "../../../hooks/paginatio/use-pagination"
import { useUserApi } from "../../../hooks/api/user/use-user.hooks"

export const VisitList = () => {
    const [visit, setVisit] = useState([])
    const [usuario, setUsuario] = useState([])
    const {page, handleNextPage, handlePreviousPage} = usePagination()

    const visitApi = useVisitApi()
    const userApi = useUserApi()

    useEffect(() => {
        const userId = parseInt(localStorage.getItem("userProfile"))
        const getUser = async()=>{
            const _usuario = await userApi.searchUser(userId)
            setUsuario(_usuario)
        }
		getUser()
	}, [userApi])

	useEffect(() => {
        if(usuario?.idUsuario){
            const getVisit = async()=>{
                try{
                    const _visit = await visitApi.listVisit(usuario?.idUsuario, usuario?.tipoUsuario, page)
                    setVisit(_visit)
                } catch (error){
                    console.log(error)
                }
                
            }
            getVisit()
        }
        
	}, [visitApi, usuario])

    return (
        <div className="visitList">
            {visit?.length ? (
				<table>
                    <tr className="header-table">
                        <th>Nome do Animal</th>
                        <th>Ong</th>
                        <th>Adotante</th>
                        <th>Data</th>
                        <th>Hora</th>
                        <th>Status</th>
                    </tr>
					{visit?.map(visit => (
						<VisitCard key={visit?.id} /*loggedUser={loggedUser}*/ visit={visit} />
					))}
					{/* <button disabled={page === INITIAL_PAGE} onClick={handlePreviousPage}>
						Previous Page
					</button>
					<button disabled={page === LAST_PAGE} onClick={handleNextPage}>
						Next Page
					</button> */}
				</table>
			) : (
				<h3 className="message-empty">Não há visitas a serem exibidos</h3>
			)}
        </div>
    )
}