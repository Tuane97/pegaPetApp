import {useEffect, useState} from 'react'
// import {COMMENT_INITIAL} from '../../../constants/comment-state.constants'
// import {/*useCommentApi,*/ usePostApi} from '../../../hooks'
// import {Comments} from '../comments/comments.component'
import './post.css'
import adopt from '../../../utils/images/adopt.png'
import commentImage from '../../../utils/images/coment.png'
import profileDefault from '../../../utils/images/profile-default.png'
import { useNavigate } from 'react-router-dom'
// import okImage from '../../../utils/images/ok.png'

export const Post = ({ _post}) => {
	const [post, setPost] = useState()
	const navigate = useNavigate()
	// const [comment, setComment] = useState(COMMENT_INITIAL)
	// const postApi = usePostApi()
	// const commentApi = useCommentApi()

	useEffect(() => {
		setPost(_post)
	}, [_post])

	// const handleComment = () => {
	// 	setComment({...comment, show: !comment.show})
	// }

	// const handleChangeVisibility = async event => {
	// 	const {value} = event.target
	// 	try {
	// 		await postApi.changeVisibility(post.idPost, value)
	// 		const updatePost = {...post, visibility: value}
	// 		setPost(updatePost)
	// 	} catch (error) {}
	// }

	const handleCreateProcess = (id) => {
		// const {value} = event.target
		console.log("id", id);
		localStorage.setItem('animalId', id)	
		navigate("/createProcess")
	}

	// const handlePublishComment = async event => {
	// 	event.preventDefault()
	// 	try {
	// 		// await commentApi.commentPost(post.idPost, comment.comment)
	// 		// const updateComments = await commentApi.getCommentsPost(post.idPost)
	// 		// setPost({...post, comments: updateComments})
	// 		setComment(COMMENT_INITIAL)
	// 	} catch (error) {}
	// }
	return (
		<div className="post">
			{/* <div className="post__header">
				<div className="post__user-info">
					<p>{post?.nome}</p>
				</div>
			</div> */}
			<div className="post-info">
				<div className="post__content-image">
					<img src={post?.urlImage} alt="" />
				</div>
				<div className="post__content-info">
					<div className="post__content-info__ong">
						<div className="post__content-info__ong__image">
							<img src={profileDefault} alt="" />
						</div>
						<h4>{post?.ong?.nomeOng}</h4>
					</div>
					<div className="post__content-info__animal">
						<h5>{post?.nome}</h5>
						<p>Idade: {post?.idade}</p>
						<p>Raça: {post?.raca}</p>
						<p>Caracteristicas: {post?.caracteristicas}</p>
					</div>
				</div>
			</div>
			<div className="post__buttons">
				<button className="adopt-button" onClick={() => handleCreateProcess(post?.id)}>
					<img className="adopt-logo" src={adopt} alt="like" />
				</button>
				<button className="comment-button">
					<img className="comment-logo" src={commentImage} alt="comment" />
				</button>
			</div>
			{/* {comment.show && (
				<form className="form-comment" onSubmit={handlePublishComment}>
					<input type="text" value={comment.comment} placeholder="comment" onChange={handleChangeComment} />
					<button className="ok-button">
						<img className="ok-logo" src={okImage} alt="ok" />
					</button>
				</form>
			)}
			<Comments comments={post?.comments} /> */}
		</div>
	)
}
