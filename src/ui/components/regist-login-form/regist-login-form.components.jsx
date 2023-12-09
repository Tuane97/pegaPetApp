import {useNavigate} from 'react-router-dom'
import './regist-login-form.css'

export const RegistLoginForm = ({handleSubmit, handleChange, handleClickLogin, value, isRegister}) => {
	const navigate = useNavigate()

	const handleRegister = () => {
		navigate('/register')
	}

	const handleLogin = () => {
		navigate('/')
	}

	return (
		<form onSubmit={handleSubmit} className="registration-form">
			{isRegister && (
				<label>
					Nome: <input type="text" name="name" onChange={handleChange} value={value.name} />
				</label>
			)}
			<label>
				Email: <input type="text" name="email" onChange={handleChange} value={value.email} />
			</label>

			<label>
				Password: <input type="password" name="password" onChange={handleChange} value={value.password} />
			</label>
			{isRegister && (
				<>
					<label>
						Tipo de Usuario: <input type="text" name="userType" onChange={handleChange} value={value.userType} />
					</label>

					<label>
						Endereço: <input type="text" name="address" onChange={handleChange} value={value.address} />
					</label>

					<label>
						Foto: <input type="text" name="photo" onChange={handleChange} value={value.photo} />
					</label>
					<label>
						Cnpj: <input type="text" name="cnpj" onChange={handleChange} value={value.cnpj} />
					</label>
					<label>
						COntact: <input type="text" name="nrContact" onChange={handleChange} value={value.nrContact} />
					</label>
					<label>
						Preferências: <textarea name="preferences" onChange={handleChange} value={value.preferences} />
					</label>
					<button>Register</button>
					<button type="button" onClick={handleLogin}>
						Login
					</button>
				</>
			)}
			{!isRegister && (
				<>
					<button>Login</button>
					<button type="button" onClick={handleRegister}>
						Register
					</button>
				</>
			)}
		</form>
	)
}
