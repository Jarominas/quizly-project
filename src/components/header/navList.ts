import { HomeIcon, ChatBubbleBottomCenterIcon, DeviceTabletIcon, HomeModernIcon } from '@heroicons/react/24/outline'

interface NavItem {
	name: string
	link: string
	icon?: React.ComponentType
}

export const navList: NavItem[] = [
	{
		name: 'Home',
		link: '/',
		icon: HomeIcon,
	},
	{
		name: 'About',
		link: '/about',
		icon: ChatBubbleBottomCenterIcon,
	},
	{
		name: 'Services',
		link: '/services',
		icon: DeviceTabletIcon,
	},
	{
		name: 'Contact',
		link: '/contact',
		icon: HomeModernIcon,
	},
]
