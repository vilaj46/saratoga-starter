import Image from 'next/image'

import { brunswick_hero, ug_hero } from '../../constants/images'
import config from '../../constants/config'
import { Bnb } from '../../types/Bnb'
import GradientTopRight from './GradientTopRight'
import GradientBottomLeft from './GradientBottomLeft'
import ButtonGroup from './ButtonGroup'

const Hero = () => {
	const isBrunswick = config.bnb === Bnb.Brunswick

	const heading = isBrunswick
		? 'Welcome to The Brunswick at Saratoga Bed & Breakfast'
		: 'Award-Winning Bed & Breakfast in Saratoga Springs, New York'

	const message = isBrunswick
		? 'Located in the heart of Saratoga Springs, New York, The Brunswick at Saratoga Bed & Breakfast is an elegant and historic inn located on Union Avenue – the most renowned thoroughfare in Saratoga. The Brunswick is a Gothic Victorian building built in 1886, offering lodging with king- and queen-bed options and updated private baths. A full breakfast is served each morning with warm-hearted hospitality.'
		: 'Experience old world hospitality at its finest at Union Gables Inn, our luxurious bed and breakfast in Saratoga Springs, New York. Built circa 1901, this Queen Anne Victorian Mansion is located in the heart of Saratoga’s Historic District known as the Magic Rectangle, one and a half blocks from the oldest racetrack in the country. Discover the romantic charm of our hotel, ideally nestled less than a ten-minute walk from countless restaurants, and downtown Saratoga gems. '

	// TODO: Replace brunswick with front property image
	const img = {
		alt: isBrunswick ? 'Lake George' : 'Union Gables Saratoga Springs',
		height: 327,
		src: isBrunswick ? brunswick_hero : ug_hero,
		width: 736,
	}
	return (
		<>
			<section
				id='home'
				className='dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]'
			>
				<div className='container'>
					<div className='-mx-4 flex flex-wrap'>
						<div className='w-full px-4'>
							<div
								className='wow fadeInUp mx-auto max-w-[800px] text-center'
								data-wow-delay='.2s'
							>
								<h1 className='mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight'>
									{heading}
								</h1>
								<p className='dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl'>
									{message}
								</p>
								<Image
									alt={img.alt}
									height={img.height}
									src={img.src}
									width={img.width}
								/>
								{/* <ButtonGroup /> */}
							</div>
						</div>
					</div>
				</div>
				<GradientTopRight />
				<GradientBottomLeft />
			</section>
		</>
	)
}

export default Hero
