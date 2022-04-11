import React, { useState } from 'react'
import googleLogo from '../../images/google-logo-9824.png'

const Shipment = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [address, setAddress] = useState('')
	const [phone, setPhone] = useState('')
	const [error, setError] = useState('')
	// const navigate = useNavigate()

	const handleNameBlur = event => {
		setName(event.target.value)
	}

	const handleEmailBlur = event => {
		setEmail(event.target.value)
	}
	const handleAddressBlur = event => {
		setAddress(event.target.value)
	}
	const handlePhoneBlur = event => {
		setPhone(event.target.value)
	}

	const handleCreateUser = event => {
		event.preventDefault()

		setError('')
	}

	return (
		<div className='form-container'>
			<div>
				<h2 className='form-title'>Shipping Information</h2>
				<form onSubmit={handleCreateUser}>
					<div className='input-group'>
						<label htmlFor='name'>Your Name</label>
						<input
							onBlur={handleNameBlur}
							type='text'
							name='name'
							id=''
							required
						/>
					</div>
					<div className='input-group'>
						<label htmlFor='email'>Your Email</label>
						<input
							onBlur={handleEmailBlur}
							type='email'
							name='email'
							id=''
							required
						/>
					</div>
					<div className='input-group'>
						<label htmlFor='address'>Address</label>
						<input
							onBlur={handleAddressBlur}
							type='text'
							name='address'
							id=''
							required
						/>
					</div>
					<div className='input-group'>
						<label htmlFor=''>Phone Number</label>
						<input
							onBlur={handlePhoneBlur}
							type='number'
							name='phone'
							id=''
							required
						/>
					</div>
					<p style={{ color: 'red' }}>{error}</p>
					<input
						className='form-submit'
						type='submit'
						value='Add Shipping'
					/>
				</form>
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

export default Shipment
