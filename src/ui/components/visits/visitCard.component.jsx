export const VisitCard = ({visit}) => {

	return (
		<tr className="visitCard">
			<td>{visit?.animal}</td>
            <td>{visit?.ong}</td>
            <td>{visit?.adotante}</td>
            <td>{visit?.data}</td>
            <td>{visit?.hora}</td>
            <td>{visit?.status}</td>
		</tr>
	)
}