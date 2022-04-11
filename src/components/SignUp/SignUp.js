import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignUp.css'
import googleLogo from '../../images/google-logo-9824.png'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const SignUp = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [error, setError] = useState('')
	const navigate = useNavigate()

	const [createUserWithEmailAndPassword, user] =
		useCreateUserWithEmailAndPassword(auth)

	const handleEmailBlur = event => {
		setEmail(event.target.value)
	}
	const handlePasswordBlur = event => {
		setPassword(event.target.value)
	}
	const handleConfirmPasswordBlur = event => {
		setConfirmPassword(event.target.value)
	}
	const handleErrorBlur = event => {
		setError(event.target.value)
	}

	if (user) {
		navigate('/shop')
	}

	const handleCreateUser = event => {
		event.preventDefault()
		if (password !== confirmPassword) {
			setError('Your two password did not match')
			return
		}
		if (password.length < 6) {
			setError('Password must be 6 caracters or longer')
		}
		createUserWithEmailAndPassword(email, password)
		setError('')
	}

	return (
		<div className='form-container'>
			<div>
				<h2 className='form-title'>Sign Up</h2>
				<form onSubmit={handleCreateUser}>
					<div className='input-group'>
						<label htmlFor='email'>Email</label>
						<input
							onBlur={handleEmailBlur}
							type='email'
							name='email'
							id=''
							required
						/>
					</div>
					<div className='input-group'>
						<label htmlFor='password'>Password</label>
						<input
							onBlur={handlePasswordBlur}
							type='password'
							name='password'
							id=''
							required
						/>
					</div>
					<div className='input-group'>
						<label htmlFor='confirm-password'>Confirm Password</label>
						<input
							onBlur={handleConfirmPasswordBlur}
							type='password'
							name='confirm-password'
							id=''
							required
						/>
					</div>
					<p style={{ color: 'red' }}>{error}</p>
					<input className='form-submit' type='submit' value='Sign Up' />
				</form>
				<p>
					Allready Have an Account?
					<Link className='form-link' to='/login'>
						Login
					</Link>
				</p>
				<div className='or-line'>
					<div></div>
					<p>or</p>
					<div></div>
				</div>
				<div className='google-btn'>
					<button>
						<img src={googleLogo} alt='' />
						<p>Continue with Google</p>
					</button>
				</div>
			</div>
		</div>
	)
}

export default SignUp
