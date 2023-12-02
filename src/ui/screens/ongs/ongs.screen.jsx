import './ongs.style.css'
import {Header} from '../../components/header/header.component'
import {Sidebar} from '../../components/sidebar/sidebar.component'
import {OngsList} from './listOngs'
import {useEffect, useState} from 'react'
import {CardOng} from '../../components/cardOng/cardOng.component'
import { Link } from 'react-router-dom'

export const OngList = () => {
	const [ongs, setOngs] = useState([])

	useEffect(() => {
		const _ongs = OngsList()
		setOngs(_ongs)
	}, [])

	return (
		<>
			<Header />
			<Sidebar />
			<div className="ongList">
				<div className="ongList-container">
					<div>
						{ongs.map(ong => {
							return (
							<Link to={"/ongProfile"}>
								<CardOng ong={ong} />
							</Link>)
						})}
					</div>
					<div className="ongsPaginacao">
						<button>{'<anterior'}</button>
						<button>{'próximo>'}</button>
					</div>
				</div>
			</div>
		</>
	)
}
