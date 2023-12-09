import {useEffect, useState} from 'react'
import { useAnimal } from '../../../hooks/api/animal/use-animal.hooks'
import {usePagination, } from '../../../hooks/paginatio/use-pagination'
// import {PostsList} from './listPost'
import {Post} from '../post/post'

export const Posts = ({loggedUser}) => {
	const [posts, setPosts] = useState()
	const {page, totalPage, handleNextPage, handlePreviousPage} = usePagination()

	const INITIAL_PAGE = 0
	const LAST_PAGE = totalPage - 1
	const animalApi = useAnimal()

	useEffect(
		() => {
			const getPosts = async () => {
				try {			
					const _posts = await animalApi.listAllDisp(page)
					console.log(_posts)
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
					{posts?.map(post => (
						<Post key={post.idPost} _post={post} />
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
