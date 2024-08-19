'use client'
import GoogleButton from '@/components/buttons/GoogleButton'
import IconButton from '@/components/buttons/IconButton'
import { useRouter } from 'next/navigation'
import React, { FormEventHandler } from 'react'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function SignupForm() {
	const router = useRouter()

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
				Create an account
			</h6>
			<GoogleButton />

			<div className=' sm:w-full sm:max-w-sm'>
				<form className='flex flex-col gap-3' action='#' method='POST' onSubmit={handleSubmit}>
					<input
						id='name'
						name='name'
						type='name'
						autoComplete='name'
						required
						className='mt-2 mb-2 block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:placeholder-transparent focus:ring-2 focus:ring-inset focus:ring-neutral-900 sm:text-sm sm:leading-6 '
						placeholder='Name'
					/>
					<input
						id='email'
						name='email'
						type='email'
						autoComplete='email'
						required
						className='mt-2 mb-2 block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:placeholder-transparent focus:ring-2 focus:ring-inset focus:ring-neutral-900 sm:text-sm sm:leading-6 '
						placeholder='Email'
					/>

					<input
						id='password'
						name='password'
						type='password'
						autoComplete='current-password'
						required
						className='mb-5 block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:placeholder-transparent focus:ring-2 focus:ring-inset focus:ring-neutral-900 sm:text-sm sm:leading-6'
						placeholder='Password'
					/>
					<IconButton type='submit' text='Sign up' variant='primary' width='xl' />
					<div className='mt-4 mb-4 text-left text-sm text-gray-500'>
						Already have an account?
						<button
							onClick={() => router.push('/login')}
							className='pl-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
						>
							Sign in
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}
