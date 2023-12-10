import './home.css'
import {Posts} from '../../components/posts/posts.component'
import {Header} from '../../components/header/header.component'
import {Sidebar} from '../../components/sidebar/sidebar.component'

export const Home = () => {
		
	return (
		<>
			<Header />
			<Sidebar />
			<div className="home">
				<Posts/>
			</div>
		</>
	)
}
