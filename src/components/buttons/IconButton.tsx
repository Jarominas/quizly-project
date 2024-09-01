import Link from 'next/link'
import React from 'react'

interface IconButtonProps {
	text: string
	icon?: React.ReactNode
	className?: string
	type?: 'button' | 'submit' | 'reset'
	onClick?: () => void
	variant: 'primary' | 'secondary' | 'tertiary'
	disabled?: boolean
	width: 'xl' | 'md' | 'xs'
	loading?: boolean
}

export default function IconButton({
	text,
	icon,
	className,
	type,
	onClick,
	loading,
	variant,
	disabled,
	width,
}: IconButtonProps) {
	const variantWidth = {
		xl: 'max-w-full',
		md: 'w-4/12',
		xs: 'w-2/12',
	}[width]

	return (
		<button
			className={`inline-flex items-center gap-2 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 ${variantWidth} ${className}`}
			disabled={loading}
			type={type}
			onClick={onClick}
		>
			{loading ? (
				<>
					<span className='loading loading-spinner'></span>
					<span>{text}</span>
				</>
			) : (
				<>
					{icon && <span className='w-6 h-6'>{icon}</span>}
					<span>{text}</span>
				</>
			)}
		</button>
	)
}
