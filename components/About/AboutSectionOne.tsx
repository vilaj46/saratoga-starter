import Image from 'next/image'
import SectionTitle from '../Common/SectionTitle'
import { FaStar } from 'react-icons/fa6'

import { ug_racetrack } from '../../constants/images'

const checkIcon = <FaStar size={25} />

const AboutSectionOne = () => {
	const List = ({ text }) => (
		<p className='mb-5 flex items-center text-lg font-medium text-body-color gap-5'>
			<span className='flex items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary p-1'>
				{checkIcon}
			</span>
			{text}
		</p>
	)

	return (
		<section
			id='about'
			className='pt-16 md:pt-20 lg:pt-28'
		>
			<div className='container'>
				<div className='border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28'>
					<div className='-mx-4 flex flex-wrap items-center'>
						<div className='w-full px-4 lg:w-1/2'>
							<SectionTitle
								title='Discover Saratoga Springs'
								paragraph='Take in all that Saratoga Springs has to offer without the hassle of parking downtown. Rich in history with its array of natural springs, classic architecture, beautiful parks, and boutique shopping, in addition to the excitement of thoroughbred horse races, we invite you to visit'
								mb='44px'
							/>

							<div
								className='wow fadeInUp mb-12 max-w-[570px] lg:mb-0'
								data-wow-delay='.15s'
							>
								<div className='mx-[-12px] flex flex-wrap '>
									<div className='w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2'>
										<List text='Congress Park' />
										<List text='Saratoga Race Course' />
										<List text='Saratoga Performing Arts Center' />
									</div>

									<div className='w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2'>
										<List text='Saratoga Springs City Center' />
										<List text='Saratoga Spa State Park' />
										<List text='Annual festivals and events' />
									</div>
								</div>
							</div>
						</div>

						<div className='w-full px-4 lg:w-1/2'>
							<div
								className='wow fadeInUp relative mx-auto aspect-video lg:mr-0'
								data-wow-delay='.2s'
							>
								<Image
									src={ug_racetrack}
									alt='about-image'
									fill
									className='drop-shadow-three mx-auto max-w-full dark:drop-shadow-none lg:mr-0'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSectionOne
