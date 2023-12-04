import { useEffect, useState } from "react"
import { ListVisits } from "./visits"
import { VisitCard } from "./visitCard.component"
import "./visitList.style.css"

export const VisitList = (idUsuario) => {
    const [visit, setVisit] = useState([])

    useEffect(() => {
		const _visit = ListVisits()
		setVisit(_visit)
	}, [])

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