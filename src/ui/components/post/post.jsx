import {useEffect, useState} from 'react'
import './post.css'
import adopt from '../../../utils/images/adopt.png'
import commentImage from '../../../utils/images/coment.png'
import profileDefault from '../../../utils/images/profile-default.png'
import { useNavigate } from 'react-router-dom'

export const Post = ({ _post}) => {
	const [post, setPost] = useState()
	const navigate = useNavigate()

	useEffect(() => {
		setPost(_post)
	}, [_post])

	const handleCreateProcess = (_post) => {
		console.log("post", _post);
		localStorage.setItem('postAnimal', JSON.stringify(_post))	
		navigate("/createProcess")
	}
	
	return (
		<div className="post">
			<div className="post-info">
				<div className="post__content-image">
					<img src={post?.foto} alt="" />
				</div>
				<div className="post__content-info">
					<div className="post__content-info__ong">
						<div className="post__content-info__ong__image">
							<img src={post?.ong?.foto || profileDefault} alt="" />
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
				<button className="adopt-button" onClick={() => handleCreateProcess(post)}>
					<img className="adopt-logo" src={adopt} alt="like" />
				</button>
				<button className="comment-button">
					<img className="comment-logo" src={commentImage} alt="comment" />
				</button>
			</div>
		</div>
	)
}
