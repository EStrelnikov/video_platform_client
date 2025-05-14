import { Menu, Youtube } from 'lucide-react'
import Link from 'next/link'

import { PUBLIC_PAGE } from '@/config/public-page.config'

export function SidebarHeader({ toggleSidebar }: { toggleSidebar: () => void }) {
	return (
		<div className='flex items-center gap-6 mb-12'>
			<button
				className='cursor-pointer opacity-85 hover:opacity-100 py transition-opacity duration-[333ms] ease-in-out'
				onClick={toggleSidebar}
			>
				<Menu />
			</button>
			<Link
				href={PUBLIC_PAGE.HOME}
				className='flex items-center gap-1.5'
			>
				<Youtube
					color='#ad2528'
					size={29}
				/>
				<span className='font-medium text-xl'>VidSphere</span>
			</Link>
		</div>
	)
}
