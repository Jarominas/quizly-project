import React from 'react'
import LoginForm from './LoginForm'
import ImageContainer from './ImageContainer'

export default function LoginPage() {
	return (
		<main className='flex flex-row min-h-screen relative'>
			<LoginForm />
			<ImageContainer />
		</main>
	)
}
