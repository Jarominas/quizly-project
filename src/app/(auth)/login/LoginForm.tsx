'use client'

import React, { FormEventHandler } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import IconButton from '@/components/buttons/IconButton'
import GoogleButton from '@/components/buttons/GoogleButton'
import LoadingSpinner from '@/ui-kit/LoadingSpinner'

const styles = {
	formContainer: ' sm:w-full sm:max-w-sm',
	form: 'space-y-10',
	emailInput:
		' mt-2 mb-5 block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neutral-900 sm:text-sm sm:leading-6',
	passwordBox: 'text-right text-xs mb-5',
	passwordInput:
		'w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neutral-900 sm:text-sm sm:leading-6',
	button: 'btn btn-neutral group flex w-full justify-between rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ',
	signUpText: 'mt-4 mb-4 text-left text-sm text-gray-500',
	signUpBtn: 'pl-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500',
	forgotPassword: 'flex justify-end text-sm font-semibold text-neutral hover:text-neutral',
}

export default function LoginForm() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const callbackUrl = searchParams?.get('callbackUrl')
	const [error, setError] = React.useState({ message: '', id: 0 })

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault()
		console.log('submit')
		// const formData = new FormData(e.currentTarget)
		// const email = formData.get('email') as string
		// const password = formData.get('password') as string
		// try {
		// 	await signInWithEmail(email, password)
		// 	router.push(callbackUrl || '/')
		// } catch (error: any) {
		// 	setError({ message: error.message, id: Date.now() })
		// }
	}

	return (
		<div className='flex flex-col gap-2 w-full max-w-md px-12 py-12 ml-auto mr-auto '>
			<IconButton
				text='Back'
				icon={<HomeIcon />}
				onClick={() => router.push('/')}
				variant='primary'
				width='md'
			/>

			<h6 className='sm:w-full sm:max-w-sm text-left text-2xl font-bold leading-9 tracking-tight text-gray-900'>
				Sign in to your account
			</h6>
			<GoogleButton />

			<div className={styles.formContainer}>
				<form className='flex flex-col gap-3' action='#' method='POST' onSubmit={handleSubmit}>
					<input
						id='email'
						name='email'
						type='email'
						autoComplete='email'
						required
						className='mt-2 mb-2 block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:placeholder-transparent focus:ring-2 focus:ring-inset focus:ring-neutral-900 sm:text-sm sm:leading-6 '
						placeholder='Email'
					/>
					<Link
						href='/auth/forgot-password'
						className='flex justify-end text-sm font-semibold text-neutral hover:text-neutral'
					>
						Forgot password?
					</Link>
					<input
						id='password'
						name='password'
						type='password'
						autoComplete='current-password'
						required
						className='mb-5 block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:placeholder-transparent focus:ring-2 focus:ring-inset focus:ring-neutral-900 sm:text-sm sm:leading-6'
						placeholder='Password'
					/>
					<IconButton type='submit' text='Sign in' variant='primary' width='xl' />
					<div className={styles.signUpText}>
						New user?
						<button onClick={() => router.push('/signup')} className={styles.signUpBtn}>
							Create an account
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}
