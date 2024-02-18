import Image from 'next/image'

import { brunswick_section2, ug_garden } from '../../constants/images'
import { useBnb } from '../../hooks/useBnb'

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
							<div className='mb-9'>
								<h3 className='mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl'>
									Historic Mansion Retreat
								</h3>
								<p className='text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed'>
									Experience luxury and charm at our
									118-year-old mansion in Saratoga Springs,
									featuring a classic wraparound porch and
									airy living areas adorned with period
									antiques. Enjoy over one acre of lush
									gardens, fountains, and a seasonal
									Romanesque-style pool during your stay.
								</p>
							</div>
							<div className='mb-9'>
								<h3 className='mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl'>
									Elegant Rooms and Suites
								</h3>
								<p className='text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed'>
									Indulge in comfort and style in our
									oversized rooms and suites, each uniquely
									decorated and equipped with modern
									amenities. Relax by the romantic natural gas
									fireplace, stay connected with complimentary
									wireless Internet, and admire the curated
									selection of period antiques throughout.
								</p>
							</div>
							<div className='mb-1'>
								<h3 className='mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl'>
									Exceptional Hospitality
								</h3>
								<p className='text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed'>
									Your stay includes a freshly-prepared
									breakfast by our Cordon Bleu trained chef,
									homemade baked goods in the afternoon, and
									exemplary concierge service to ensure a
									memorable experience. Choose from designated
									pet-friendly accommodations, extended stay
									options, or rooms with private patios for
									added convenience and comfort.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSectionTwo
