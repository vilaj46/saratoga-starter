import Image from 'next/image'

import { brunswick_section2, ug_garden } from '../../constants/images'
import { useBnb } from '../../hooks/useBnb'

import CONFIGURATION from '../../WILD/configuration'
import { Info } from '../../types/configuration'
import { inject } from '../../utils/inject'

const AboutDetails = ({ title, description }: Info) => {
	return (
		<div className='mb-9'>
			<h3 className='mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl'>
				{inject(title)}
			</h3>
			<p className='text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed'>
				{inject(description)}
			</p>
		</div>
	)
}

const AboutSectionTwo = () => {
	const { isBrunswick } = useBnb()
	const img = {
		alt: isBrunswick ? 'Mountain' : 'Garden',
		src: isBrunswick ? brunswick_section2 : ug_garden,
	}
	return (
		<section className='py-16 md:py-20 lg:py-28'>
			<div className='container'>
				<div className='-mx-4 flex flex-wrap items-center'>
					<div className='w-full px-4 lg:w-1/2'>
						<div
							className='wow fadeInUp relative mx-auto mb-12 aspect-video text-center lg:m-0'
							data-wow-delay='.15s'
						>
							<Image
								alt={img.alt}
								src={img.src}
								fill
								className='drop-shadow-three dark:drop-shadow-none'
							/>
						</div>
					</div>
					<div className='w-full px-4 lg:w-1/2'>
						<div
							className='wow fadeInUp max-w-[470px]'
							data-wow-delay='.2s'
						>
							{CONFIGURATION.information.homePage.map(
								(info, idx) => (
									<AboutDetails
										{...info}
										key={idx}
									/>
								)
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSectionTwo
