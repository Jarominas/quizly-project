'use client'
import React from 'react'
import { navList } from './navList'
import Link from 'next/link'
import IconButton from '../buttons/IconButton'
import { useRouter } from 'next/navigation'

export default function DropdownList() {
	const router = useRouter()
	return (
		<div className='md:hidden '>
			<div className='flex flex-col  px-2 pt-2 pb-3 space-y-1 sm:px-3 '>
				{navList.map((navItem) => (
					<Link key={navItem.name} href={navItem.link}>
						<IconButton
							text={navItem.name}
							variant='primary'
							width='md'
							icon={navItem.icon && <navItem.icon />}
						/>
					</Link>
				))}
			</div>
			<div className='border-t border-gray-300 w-10/12 m-auto'></div>
			<div className='flex flex-col  px-2 pt-2 pb-3 space-y-1 sm:px-3 '>
				<IconButton
					type='button'
					onClick={() => router.push('/login')}
					text='Login'
					variant='primary'
					width='md'
				/>
			</div>
		</div>
	)
}
