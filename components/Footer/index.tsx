import { FaHeart } from 'react-icons/fa6'

import Logo from '../Header/Logo'
import FooterList from './FooterList'
import { useBnb } from '../../hooks/useBnb'
import brandsData from '../../components/Brands/brandsData'
import { SingleBrand } from '../Brands'
import FooterGradient from './FooterGradient'
import CONFIGURATION from '../../WILD/configuration'

const Footer = () => {
	const usefulLinks = [
		{ href: '/blog', label: 'Blog' },
		{ href: '/pricing', label: 'Pricing' },
		{ href: '/about', label: 'About' },
	]
	const terms = [
		{ href: '/tos', label: 'TOS' },
		{ href: '/privacy-policy', label: 'Privacy Policy' },
		{ href: '/refund-policy', label: 'Refund Policy' },
	]
	const supportAndHelp = [
		{ href: '/ticket', label: 'Open Support Ticket' },
		{ href: '/terms', label: 'Terms of Use' },
		{ href: '/about', label: 'About' },
	]

	const message = ''

	const { isBrunswick } = useBnb()

	return (
		<>
			<footer
				className='wow fadeInUp dark:bg-gray-dark relative z-10 bg-white pt-16 md:pt-20 lg:pt-24'
				data-wow-delay='.1s'
			>
				<div className='container'>
					<div className='-mx-4 flex flex-wrap'>
						<div className='w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12'>
							<div className='mb-12 max-w-[360px] lg:mb-16'>
								<div className='mb-8 inline-block'>
									<Logo sticky={false} />
								</div>
								<p className='dark:text-body-color-dark mb-9 text-base leading-relaxed text-body-color'>
									{message}
								</p>
								<div className='flex items-center'>
									{brandsData.map((brand) => (
										<SingleBrand
											key={brand.id}
											brand={brand}
										/>
									))}
								</div>
							</div>
						</div>

						{CONFIGURATION.footer.map((foot, idx) => (
							<FooterList
								key={idx}
								heading={foot.title}
								links={foot.urls}
							/>
						))}

						{/* <FooterList
							heading='Useful Links'
							links={usefulLinks}
						/> */}
						{/* <FooterList
							heading='Terms'
							links={terms}
						/> */}
						{/* <FooterList
							heading='Support & Help'
							links={supportAndHelp}
						/> */}
					</div>

					<div className='h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]'></div>
					<div className='py-8'>
						{/* <p className='text-center text-base text-body-color dark:text-white'>
							<span>Made with</span>{' '}
							<FaHeart className='inline' />{' '}
							<span>by Julian</span>
						</p> */}
					</div>
				</div>
				<FooterGradient />
			</footer>
		</>
	)
}

export default Footer
