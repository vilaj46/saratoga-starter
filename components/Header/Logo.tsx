import _ from '../../public/en-us.json'

import config from '../../constants/config'
import Image from 'next/image'
import Link from 'next/link'

import {
	brunswick_logo,
	brunswick_logo_dark,
	ug_logo,
	ug_logo_dark,
} from '../../constants/images'
import routes from '../../constants/routes'
import { Bnb } from '../../types/Bnb'

const Logo = ({ sticky }: { sticky: boolean }) => {
	const logoWrapperClassName = sticky ? 'py-5 lg:py-2' : 'py-8'

	const isBrunswick = config.bnb === Bnb.Brunswick

	const regularLogo = isBrunswick ? brunswick_logo : ug_logo
	const darkLogo = isBrunswick ? brunswick_logo_dark : ug_logo_dark

	const height = isBrunswick ? 30 : 70
	const width = isBrunswick ? 140 : 350

	return (
		<div className=''>
			<Link
				className={`block header-logo w-full ${logoWrapperClassName}`}
				href={routes.home}
			>
				<Image
					alt='logo'
					className='w-full dark:hidden'
					height={height}
					src={regularLogo}
					width={width}
				/>
				<Image
					alt='logo'
					className='hidden w-full dark:block'
					height={height}
					src={darkLogo}
					width={width}
				/>
			</Link>
		</div>
	)
}

export default Logo
