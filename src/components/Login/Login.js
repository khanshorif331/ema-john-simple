import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import googleLogo from '../../images/google-logo-9824.png'

const Login = () => {
	return (
		<div className='form-container'>
			<div>
				<h2 className='form-title'>Login</h2>
				<form>
					<div className='input-group'>
						<label htmlFor='email'>Email</label>
						<input type='email' name='email' id='' required />
					</div>
					<div className='input-group'>
						<label htmlFor='password'>Password</label>
						<input type='password' name='password' id='' required />
					</div>
					<input className='form-submit' type='submit' value='Login' />
				</form>
				<p>
					New to Ema-John?
					<Link className='form-link' to='/signup'>
						Create an account
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

export default Login
