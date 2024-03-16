'use client'
import Image from 'next/image'
import { FaComputerMouse } from 'react-icons/fa6'

import _ from '../../public/en-us.json'
import { brunswick_hero, ug_hero } from '../../constants/images'
import GradientTopRight from './GradientTopRight'
import GradientBottomLeft from './GradientBottomLeft'
import { useBnb } from '../../hooks/useBnb'
import { inject } from '../../utils/inject'
import Heading from '../Common/Heading'
import Paragraph from '../Common/Paragraph'

import content from '../../WILD/content.json'

const Hero = () => {
	const { isBrunswick } = useBnb()

	const heading = isBrunswick
		? content.HOME_PAGE.Title
		: _.AwardWinningBedAndBreakfast

	const brunswickMessage = inject(content.HOME_PAGE.Title_Description)

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
				className='dark:bg-gray-dark relative overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]'
				style={{
					height: `100vh`,
				}}
			>
				<div
					className='absolute h-full w-full inset-x-0 inset-y-0'
					style={{
						backgroundImage: `url("${img.src}")`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'center center',
					}}
				/>
				<a
					href='#home-page-heading'
					className='absolute bottom-5'
					style={{
						left: '50%',
						transform: 'translateX(-50%)',
					}}
				>
					<FaComputerMouse
						color='white'
						size={32}
					/>
				</a>
			</section>
			<div className='container relative mt-16 z-20'>
				<div className='-mx-4 flex flex-wrap'>
					<div className='w-full px-4'>
						<div
							className='wow fadeInUp mx-auto max-w-[800px] text-center'
							data-wow-delay='.2s'
						>
							<div id='home-page-heading'>
								<Heading>{heading}</Heading>
							</div>
							<Paragraph>{message}</Paragraph>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Hero
