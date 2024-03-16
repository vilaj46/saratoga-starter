import jsxToString from 'jsx-to-string'
import parse, { Element, HTMLReactParserOptions } from 'html-react-parser'
import routes from '../constants/routes'
import CustomLink from '../components/Link'
import { ReactNode } from 'react'

export const injectNode = (text: string, injections: Array<JSX.Element>) => {
	let temp = text

	injections.forEach((injection, idx) => {
		temp = temp.replace(`{${idx}}`, jsxToString(injection))
	})

	return parse(temp) // not working with Link
}

export const injectString = (text: string, injections: Array<string>) => {
	let temp = text

	injections.forEach((injection, idx) => {
		temp = temp.replace(`{${idx}}`, injection)
	})

	return temp
}

const injectLink = (domNode: Element) => {
	const href = domNode.attribs['href']
	const children = Array.from(domNode.children).map((child) => child['data'])
	return <CustomLink href={href}>{children}</CustomLink>
}

const options: HTMLReactParserOptions = {
	replace(domNode) {
		if (domNode instanceof Element) {
			const attribString = domNode.attribs
				? JSON.stringify(domNode.attribs)
				: ''
			if (attribString.includes('href')) {
				return injectLink(domNode)
			}
		}

		return domNode
	},
}

export const inject = (text: string) => {
	return parse(text, options)
}
