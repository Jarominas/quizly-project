import React from 'react'
import { navList } from './navList'
import Link from 'next/link'

export default function NavBar() {
	return (
		<div className='hidden md:flex items-center space-x-4'>
			{navList.map((navItem) => (
				<Link
					key={navItem.name}
					href={navItem.link}
					className='text-gray-900 hover:text-blue-500'
				>
					{navItem.name}
				</Link>
			))}
		</div>
	)
}
