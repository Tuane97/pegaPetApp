import {useEffect, useState} from 'react'
import { useAnimalApi } from '../../../hooks/api/animal/use-animal.hooks'
import {usePagination } from '../../../hooks/paginatio/use-pagination'
import {Post} from '../post/post'

export const Posts = () => {
	const [posts, setPosts] = useState()
	const {page, handleNextPage, handlePreviousPage} = usePagination()
	const [totalPage, setTotalPage] = useState();

	const INITIAL_PAGE = 0
	const LAST_PAGE = totalPage - 1
	const animalApi = useAnimalApi()

	useEffect(
		() => {
			const pages = parseInt(localStorage.getItem("postTotalPage"))
			setTotalPage(pages)
			const getPosts = async () => {
				try {			
					const _posts = await animalApi.listAllDisp(page)
					setPosts(_posts.content)					
				} catch (error) {
					console.log(error)
				}
			}
			getPosts()
		},
		[
			animalApi, page
		]
	)

	return (
		<div className="post-container">
			{posts?.length ? (
				<>
					{posts?.map((post, index) => (
						<Post key={index} _post={post} />
					))}
					<button disabled={page === INITIAL_PAGE} onClick={handlePreviousPage}>
						Previous Page
					</button>
					<button disabled={page === LAST_PAGE} onClick={handleNextPage}>
						Next Page
					</button>
				</>
			) : (
				<h3 className="message-empty">Não há posts a serem exibidos</h3>
			)}
		</div>
	)
}
