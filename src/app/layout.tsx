import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import Layout from '@/components/layout/Layout'

import './globals.css'

const notoSans = Noto_Sans({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Video Platform',
	description: 'App for video watching'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${notoSans.variable} ${notoSans.variable} antialiased`}>
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}
