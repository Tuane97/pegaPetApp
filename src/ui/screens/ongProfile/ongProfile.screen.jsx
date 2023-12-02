import { UserType } from "../../../utils/enums/userType.enum"
import { Profile } from "../../components/ProfileView/profile.component"
import { Header } from "../../components/header/header.component"
import { Sidebar } from "../../components/sidebar/sidebar.component"
import "../../components/ProfileView/profile.style.css"

export const OngProfile = ({ong, isViewer}) => {


	return (
		<>
			<Header />
			<Sidebar />
			<Profile userId={ong.id} userType={UserType.ONG} isViewer={isViewer}/>
		</>
	)
}