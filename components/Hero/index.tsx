import Image from 'next/image'

import _ from '../../public/en-us.json'
import { brunswick_hero, ug_hero } from '../../constants/images'
import GradientTopRight from './GradientTopRight'
import GradientBottomLeft from './GradientBottomLeft'
import { useBnb } from '../../hooks/useBnb'
import { useInject } from '../../hooks/useInject'
import routes from '../../constants/routes'

const Hero = () => {
	const { isBrunswick } = useBnb()

	const heading = isBrunswick
		? _.WelcomeToTheBrunswick
		: _.AwardWinningBedAndBreakfast

	const brunswickMessage = useInject(_.LocatedInTheHeart, [
		<a
			className='text-brunswick-primary underline'
			href={routes.saratogaSprings}
		>
			{_.SaratogaSpringsNewYork}
		</a>,
		<a
			className='text-brunswick-primary underline'
			href={routes.lodging}
		>
			{_.LodingWithKingAndQueen}
		</a>,
	])

	const message = isBrunswick
		? brunswickMessage
		: 'Experience old world hospitality at its finest at Union Gables Inn, our luxurious bed and breakfast in Saratoga Springs, New York. Built circa 1901, this Queen Anne Victorian Mansion is located in the heart of Saratoga’s Historic District known as the Magic Rectangle, one and a half blocks from the oldest racetrack in the country. Discover the romantic charm of our hotel, ideally nestled less than a ten-minute walk from countless restaurants, and downtown Saratoga gems. '

	const img = {
		alt: isBrunswick
			? 'Brunswick Saratoga Springs'
			: 'Union Gables Saratoga Springs',
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
