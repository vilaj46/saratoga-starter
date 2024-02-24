const Paragraph = ({ children }) => {
	return (
		<p className='dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl'>
			{children}
		</p>
	)
}

export default Paragraph
