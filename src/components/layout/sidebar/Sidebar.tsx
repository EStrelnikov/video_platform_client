import { SidebarHeader } from './header/SidebarHeader'
import { SidebarMenu } from './menus/SidebarMenu'
import { SidebarSubscriptions } from './menus/subscriptions/SidebarSubscriptions'
import { MORE_SIDEBAR_DATA, SIDEBAR_DATA } from './sidebar.data'

const Sidebar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
	return (
		<aside className='p-[1.2rem] border-r border-[#242e32] whitespace-nowrap overflow-hidden'>
			<SidebarHeader toggleSidebar={toggleSidebar} />
			<SidebarMenu menu={SIDEBAR_DATA} />

			<SidebarSubscriptions />
			<SidebarMenu
				title='More from YouTube '
				menu={MORE_SIDEBAR_DATA}
			/>
		</aside>
	)
}

export default Sidebar
