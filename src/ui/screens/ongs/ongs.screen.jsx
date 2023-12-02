import './ongs.style.css'
import {Header} from '../../components/header/header.component'
import {Sidebar} from '../../components/sidebar/sidebar.component'
import {OngsList} from './listOngs'
import {useEffect, useState} from 'react'
import {CardOng} from '../../components/cardOng/cardOng.component'

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
							return <CardOng ong={ong} />
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
