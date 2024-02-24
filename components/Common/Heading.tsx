interface HeadingProps {
	children: string | JSX.Element | JSX.Element[]
	size?: number
}

const Heading = ({ children, size = 1 }) => {
	const className = `mb-5 font-bold leading-tight text-black dark:text-white sm:leading-tight md:leading-tight`
	switch (size) {
		case 1:
			const oneFontSize = 'text-3xl sm:text-4xl md:text-5xl'
			return <h1 className={`${oneFontSize} ${className}`}>{children}</h1>
		case 2:
			const twoFontSize = 'text-2xl sm:text-3xl md:text-4xl'
			return <h2 className={`${twoFontSize} ${className}`}>{children}</h2>
		case 3:
			const threeFontSize = 'text-xl sm:text-2xl md:text-3xl'
			return (
				<h3 className={`${threeFontSize} ${className}`}>{children}</h3>
			)
	}
}

export default Heading
