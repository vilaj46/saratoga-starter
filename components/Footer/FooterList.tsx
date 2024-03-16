interface FooterListProps {
	heading: string
	links: Array<{
		url: string
		label: string
	}>
}

const FooterList = ({ heading, links }: FooterListProps) => {
	return (
		<div className='w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12'>
			<div className='mb-12 lg:mb-16'>
				<h2 className='mb-10 text-xl font-bold text-black dark:text-white'>
					{heading}
				</h2>
				<ul>
					{links.map(({ url, label }) => (
						<li key={url}>
							<a
								href={url}
								className='dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary'
							>
								{label}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default FooterList
