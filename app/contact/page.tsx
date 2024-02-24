import Breadcrumb from '../../components/Common/Breadcrumb'
import Contact from '../../components/Contact'

import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Contact Page',
	description: 'Contact Page Description',
	// other metadata
}

const ContactPage = () => {
	return (
		<>
			<Breadcrumb
				pageName='Contact Page'
				description='Contact Page Description'
			/>

			<Contact />
		</>
	)
}

export default ContactPage
