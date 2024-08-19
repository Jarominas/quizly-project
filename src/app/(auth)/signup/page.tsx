import React from 'react'
import SignupForm from './SignupForm'
import ImageContainer from './ImageContainer'

export default function SignupPage() {
	return (
		<main className='flex flex-row min-h-screen relative'>
			<SignupForm />
			<ImageContainer />
		</main>
	)
}
