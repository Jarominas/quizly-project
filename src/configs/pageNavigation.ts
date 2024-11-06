import { HomeIcon, ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline'

interface NavItem {
	name: string
	link: string
	icon?: React.ComponentType
}

export const NAVIGATION_PATHS = {
	HOME: '/',
	ABOUT: '/about',
	LOGIN: '/sign-in',
	SIGN_UP: '/sign-up',
}

export const APP_NAVIGATION_LIST: NavItem[] = [
	{
		name: 'Home',
		link: NAVIGATION_PATHS.HOME,
		icon: HomeIcon,
	},
	{
		name: 'About',
		link: NAVIGATION_PATHS.ABOUT,
		icon: ChatBubbleBottomCenterIcon,
	},
]
