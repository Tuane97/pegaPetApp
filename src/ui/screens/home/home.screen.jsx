import './home.css'
// import {useEffect, useState} from 'react'
import {Posts} from '../../components/posts/posts.component'
import {Header} from '../../components/header/header.component'
import {Sidebar} from '../../components/sidebar/sidebar.component'
// import { useGlobalUser } from '../../../context/user/user.context'

export const Home = () => {
		// const [loggedUser, setLoggedUser] = useState()
		
		// const [friendshipsPending, setFriendshipsPending] = useState()
	
		// const friendshipApi = useFriendshipApi()
	
		// useEffect(() => {
		// 	const user = JSON.parse(localStorage.getItem('user'))
		// 	console.log("globaluser", globalUser)
		// 	setLoggedUser(user)
		// }, [])
	
		// useEffect(() => {
		// 	const getFriendshipPending = async () => {
		// 		try {
		// 			const _friendshipPending = await friendshipApi.listFriendSolicitations(false)
		// 			setFriendshipsPending(_friendshipPending)
		// 		} catch (error) {}
		// 	}
		// 	getFriendshipPending()
		// }, [friendshipsPending])

	return (
		<>
			<Header />
			<Sidebar />
			<div className="home">
				<Posts/>
				{/* <div className="home__solicitations">
					<h4>Pending Solicitations</h4>
					{!!friendshipsPending?.length ? (
						friendshipsPending?.map(friendship => <FriendshipPending friendship={friendship} setFriendshipsPending={setFriendshipsPending} />)
					) : (
						<p>No pending requests</p>
					)}
				</div> */}
			</div>
		</>
	)
}
