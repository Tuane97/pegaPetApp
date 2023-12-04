export const ProcessCard = ({process}) => {

	return (
		<tr className="visitCard">
			<td>{process?.animal}</td>
            <td>{process?.ong}</td>
            <td>{process?.adotante}</td>
            <td>{process?.dataInicio}</td>
            <td>{process?.visita}</td>
            <td>{process?.status}</td>
            <td>{process?.detalhe}</td>
		</tr>
	)
}