import CardPopup from "../cardPopUp/cardPopUp.component"

export const ProcessCard = ({process, user, setProcess}) => {


	return (
		<tr className="visitCard">
			<td>{process?.animal?.nome}</td>
            <td>{process?.ong?.nome}</td>
            <td>{process?.adotante?.nome}</td>
            <td>{process?.dataInicio}</td>
            <td><CardPopup setProcess={(_process)=>setProcess(_process)} info={process} userType={user.tipoUsuario} type="visita"/></td>
            <td>{process?.status}</td>
            <td><CardPopup info={process} userType={user.tipoUsuario} type="detalhes"/></td>
		</tr>
	)
}