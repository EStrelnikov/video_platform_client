'use client'

import cn from 'clsx'
import { type PropsWithChildren, useState } from 'react'

import classes from './Layout.module.css'
import Content from './content/Content'
import Sidebar from './sidebar/Sidebar'

export default function Layout({ children }: PropsWithChildren<unknown>) {
  const [isShowedSidebar, setIsShowedSidebar] = useState(true)

  const handleToggleSidebar = () => {
    setIsShowedSidebar(prev => !prev)
  }

  return (
    <main className={cn('flex min-h-screen', classes.sidebarContainer)}>
      <div className={cn(
        classes.sidebarWrapper,
        isShowedSidebar ? classes.showedSidebar : classes.hidedSidebar
      )}>
        <Sidebar toggleSidebar={handleToggleSidebar} />
      </div>
      <Content>{children}</Content>
    </main>
  )
}