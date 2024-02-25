import { ImageProps } from 'next/image'

import Heading from './Heading'
import Button from './Button'
import routes from '../../constants/routes'
import _ from '../../public/en-us.json'
import ImageCarousel from './ImageCarousel'

interface SplitProps {
	booknow?: boolean
	description: string
	heading: string
	id: string
	images: Array<ImageProps>
}

const Split = ({ booknow, description, heading, id, images }: SplitProps) => {
	return (
		<section
			id={id}
			className='pt-16 md:pt-20 lg:pt-28'
		>
			<div className='container'>
				<div className='border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28'>
					<div className='-mx-4 flex flex-wrap items-center'>
						<div className='w-full px-4 lg:w-1/2'>
							<Heading>{heading}</Heading>
							{booknow && (
								<Button
									className='mb-2'
									micro
								>
									<a
										href={routes.resNexus}
										target='_blank'
									>
										{_.BookNow}
									</a>
								</Button>
							)}
							<div
								className='wow fadeInUp mb-12 max-w-[570px] lg:mb-0'
								data-wow-delay='.15s'
							>
								<div className='mx-[-12px] flex flex-wrap '>
									{description}
								</div>
							</div>
						</div>

						<div className='w-full px-4 lg:w-1/2'>
							<div
								className='wow fadeInUp relative mx-auto aspect-video lg:mr-0'
								data-wow-delay='.2s'
							>
								<ImageCarousel images={images} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Split
