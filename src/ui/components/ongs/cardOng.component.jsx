
import imageDefault from '../../../utils/images/profile-default.png'

export const CardOng = ({ong}) => {

	return (
		<div className="cardOng">
			<div className="cardOng__imagem">
				<div className="inner">
					<img src={ong?.foto || imageDefault} alt="" />
				</div>
			</div>
			<h5 className="cardOng__nome">{ong?.nome}</h5>
		</div>
	)
}
