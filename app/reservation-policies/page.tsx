import Breadcrumb from '../../components/Common/Breadcrumb'

import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Policies Page',
	description: 'Policies Page Description',
}

const AboutPage = () => {
	return (
		<>
			<Breadcrumb
				pageName='Policies Page'
				description='Policies Page Description'
			/>
		</>
	)
}

export default AboutPage
