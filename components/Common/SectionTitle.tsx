import Heading from './Heading'

const SectionTitle = ({
	title,
	paragraph,
	width = '570px',
	center,
	mb = '100px',
	size = 1,
	underline = false,
}: {
	title?: string | string | JSX.Element | JSX.Element[]
	paragraph: string | string | JSX.Element | JSX.Element[]
	width?: string
	center?: boolean
	mb?: string
	size?: number
	underline?: boolean
}) => {
	return (
		<>
			<div
				className={`wow fadeInUp w-full ${
					center ? 'mx-auto text-center' : ''
				}`}
				data-wow-delay='.1s'
				style={{ maxWidth: width, marginBottom: mb }}
			>
				{title && (
					<Heading
						underline={underline}
						size={size}
					>
						{title}
					</Heading>
				)}
				<p className='text-base !leading-relaxed text-body-color md:text-lg'>
					{paragraph}
				</p>
			</div>
		</>
	)
}

export default SectionTitle
