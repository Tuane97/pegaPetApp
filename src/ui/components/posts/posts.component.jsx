import {useEffect, useState} from 'react'
// import {usePagination, usePostApi} from '../../../hooks'
import {PostsList} from './listPost'
import {Post} from '../post/post'

export const Posts = ({loggedUser /*, idUser*/}) => {
	const [posts, setPosts] = useState()
	// 	const {page, totalPage, handleNextPage, handlePreviousPage} = usePagination(idUser)
	//
	// 	const INITIAL_PAGE = 0
	// 	const LAST_PAGE = totalPage - 1
	// 	const postApi = usePostApi()

	useEffect(
		() => {
			const posts = PostsList()
			// const getPosts = async () => {
			// 	try {
			// 		if (idUser) {
			// 			const _posts = await postApi.listPosts(idUser, page)
			// 			setPosts(_posts.content)
			// 		} else {
			// 			const _posts = await postApi.listInitialPosts(page)
			// 			setPosts(_posts.content)
			// 		}
			// 	} catch (error) {
			// 		console.log(error)
			// 	}
			// }
			// getPosts()
			setPosts(posts)
		},
		[
			/*idUser, postApi, page*/
		]
	)

	return (
		<div className="post-container">
			{posts?.length ? (
				<>
					{posts?.map(post => (
						<Post key={post.idPost} loggedUser={loggedUser} _post={post} />
					))}
					{/* <button disabled={page === INITIAL_PAGE} onClick={handlePreviousPage}>
						Previous Page
					</button>
					<button disabled={page === LAST_PAGE} onClick={handleNextPage}>
						Next Page
					</button> */}
				</>
			) : (
				<h3>Não há posts a serem exibidos</h3>
			)}
		</div>
	)
}
