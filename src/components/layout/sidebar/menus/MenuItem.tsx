import cn from 'clsx'
import Link from 'next/link'

import type { ISidebarItem } from '../sidebar.types'

interface Props {
	item: ISidebarItem
	isActive: boolean
}

export function MenuItem({ item, isActive }: Props) {
	return (
		<li>
			<Link
				href={item.link}
				className={cn('group py-3 flex items-center gap-5 border-b', {
					'border-white font-bold': isActive,
					'border-transparent': !isActive
				})}
			>
				<item.icon
					className={cn('min-w-6', {
						'group-hover:text-[#ad2528] duration-[333ms] ease-in-out group-hover:rotate-6':
							!isActive
					})}
				/>
				<span>{item.label}</span>
			</Link>
			{item.isBottomBorder && <span className='h-[1px] bg-[#242e32] my-5 w-full block' />}
		</li>
	)
}
