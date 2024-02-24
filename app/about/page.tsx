import AboutSectionOne from '../../components/About/AboutSectionOne'
import AboutSectionTwo from '../../components/About/AboutSectionTwo'
import Breadcrumb from '../../components/Common/Breadcrumb'

import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'About Page',
	description: 'About Page Description',
	// other metadata
}

const AboutPage = () => {
	return (
		<>
			<Breadcrumb
				pageName='About Page'
				description='About Page Description'
			/>
			<AboutSectionOne />
			<AboutSectionTwo />
		</>
	)
}

export default AboutPage
