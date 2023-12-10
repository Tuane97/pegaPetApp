import './ongs.style.css'
import {Header} from '../../components/header/header.component'
import {Sidebar} from '../../components/sidebar/sidebar.component'
import {useEffect, useState} from 'react'
import {CardOng} from '../../components/ongs/cardOng.component'
import { useNavigate } from 'react-router-dom'
import { useUserApi } from '../../../hooks/api/user/use-user.hooks'
import { usePagination } from '../../../hooks/paginatio/use-pagination'

export const OngList = () => {
	const [ongs, setOngs] = useState([])
	const {page, handleNextPage, handlePreviousPage} = usePagination()
	const [totalPage, setTotalPage] = useState();
	const navigate = useNavigate()


	const INITIAL_PAGE = 0
	const LAST_PAGE = totalPage - 1
	const ongApi = useUserApi()

	useEffect(() => {
		const pages = parseInt(localStorage.getItem("ongsTotalPage"))
			setTotalPage(pages)
		const getOngs = async () =>{
			try{
				const _ongs = await ongApi.searchOngs(page)
				setOngs(_ongs.content)
			} catch(error){
				console.log(error);
			}
		}
		getOngs()
	}, [ongApi, page])

	const handleClick = (user) => {
		localStorage.setItem("userProfile", JSON.stringify(user))
		navigate("/ongProfile")
	}

	return (
		<>
			<Header />
			<Sidebar />
			<div className="ongList">
				<div className="ongList-container">
					<div>
						{ongs?.map((ong, index) => {
							return (
							<button key={index} onClick={() => handleClick(ong)}  className='link-button-ong'>
								<CardOng ong={ong} />
							</button>)
						})}
					</div>
					<div className="ongsPaginacao">
						<button disabled={page === INITIAL_PAGE} onClick={handlePreviousPage}>{'<anterior'}</button>
						<button disabled={page === LAST_PAGE} onClick={handleNextPage}>{'próximo>'}</button>
					</div>
				</div>
			</div>
		</>
	)
}
