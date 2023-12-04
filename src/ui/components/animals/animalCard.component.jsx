import imageDefault from "../../../utils/images/profile-default.png"
import "./animalList.style.css"

export const AnimalCard = ({animal}) => {

	return (
		<div className="animalCard">
            <div className="animalCard-foto">
                <div className="animalCard__image">
                    <div className="inner">
                        <img src={animal?.foto || imageDefault} alt="" />
                    </div>
                </div>
            </div>
            <div className="animalCard__info">
                <p className="name">{animal?.nome}</p>
                <div className="otherInfos">
                    {!!animal?.adotante && <p>Adotante: {animal.adotante}</p>}
                    <p>Raça: {animal?.raca}</p>
                    <p>Idade: {animal?.idade}</p>
                    <p>Características: {animal?.caracteristicas}</p>
                </div>
            </div>
		</div>
	)
}