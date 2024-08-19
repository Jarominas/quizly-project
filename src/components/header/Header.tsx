'use client'
import React from 'react'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/16/solid'
import NavBar from './NavBar'
import Logo from './Logo'
import DropdownList from './DropdownList'
import LoginButton from '../buttons/LoginButton'
import SignupButton from '../buttons/SignupButton'

export default function Header() {
	const [isOpen, setIsOpen] = React.useState(false)
	return (
		<header className='bg-white drop-shadow-sm'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between h-16'>
					<Logo />
					<NavBar />
					<div className='flex items-center  space-x-4'>
						<LoginButton />
						<SignupButton />
						<div className='-mr-2 flex md:hidden'>
							<button
								onClick={() => setIsOpen(!isOpen)}
								type='button'
								className=' inline-flex items-center justify-center p-2 rounded-md text-gray-800  focus:outline-none  '
							>
								{!isOpen ? (
									<Bars3Icon className='block h-6 w-6' />
								) : (
									<XMarkIcon className='block h-6 w-6' />
								)}
							</button>
						</div>
					</div>
				</div>
			</div>

			{isOpen && <DropdownList />}
		</header>
	)
}
