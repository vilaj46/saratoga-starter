import { Element } from 'html-react-parser'
import Link from 'next/link'
import { ReactNode } from 'react'

interface CustomLinkProps {
	children: ReactNode | string
	href?: string
}

export default function CustomLink(props: CustomLinkProps) {
	const { children, href } = props

	const isExternal = href?.includes('http') || href?.includes('https')

	const setHref = href ? href : '#'

	if (isExternal) {
		return
	}

	return (
		<Link
			className='text-brunswick-primary underline'
			href={setHref}
		>
			{children}
		</Link>
	)
}
