interface HeadingProps {
	children: string | JSX.Element | JSX.Element[]
	size?: number
	underline?: boolean
}

const Heading = ({ children, size = 1, underline = false }: HeadingProps) => {
	const className = `mb-5 font-bold leading-tight text-black dark:text-white sm:leading-tight md:leading-tight`
	const underlineClassName = underline ? 'underline' : ''
	switch (size) {
		case 1:
			const oneFontSize = 'text-3xl sm:text-4xl md:text-5xl'
			return (
				<h1
					className={`${oneFontSize} ${underlineClassName} ${className}`}
				>
					{children}
				</h1>
			)
		case 2:
			const twoFontSize = 'text-2xl sm:text-3xl md:text-4xl'
			return (
				<h2
					className={`${twoFontSize} ${underlineClassName} ${className}`}
				>
					{children}
				</h2>
			)
		case 3:
			const threeFontSize = 'text-xl sm:text-2xl md:text-3xl'
			return (
				<h3
					className={`${threeFontSize} ${underlineClassName} ${className}`}
				>
					{children}
				</h3>
			)
		case 4:
			const fourFontSize = 'text-lg sm:text-xl md:text-2xl'
			return (
				<h3
					className={`${fourFontSize} ${underlineClassName} ${className}`}
				>
					{children}
				</h3>
			)
	}
}

export default Heading
