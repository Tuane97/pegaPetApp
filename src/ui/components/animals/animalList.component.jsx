import { useEffect, useState } from "react"
import { ListAnimals } from "./listAnimals"
import { AnimalCard } from "./animalCard.component"

export const AnimalList = () =>{
    const [animals, setAnimals] = useState([])

    useEffect(() => {
		const _animals = ListAnimals()
		setAnimals(_animals)
	}, [])

    return (
        <div className="animalList">
            {animals?.length ? (
				<div>
					{animals?.map(animal => (
						<AnimalCard key={animal?.id} /*key={post.idPost} loggedUser={loggedUser}*/ animal={animal} />
					))}
					{/* <button disabled={page === INITIAL_PAGE} onClick={handlePreviousPage}>
						Previous Page
					</button>
					<button disabled={page === LAST_PAGE} onClick={handleNextPage}>
						Next Page
					</button> */}
				</div>
			) : (
				<h3 className="message-empty">Não há Animais a serem exibidas</h3>
			)}
        </div>
    )}