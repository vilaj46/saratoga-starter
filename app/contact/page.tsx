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
				pageName='Contact Us'
				description=''
			/>

			{/* <Contact /> */}
			<section className='container mt-16 dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl'>
				<ul className='flex flex-col gap-8'>
					<li>
						<a href='mailto:brunswickbnb@gmail.com'>
							Email : brunswickbnb@gmail.com
						</a>
					</li>
					<li>
						<a href='tel:518-584-6751'>Phone: (518) 584-6751</a>
					</li>
				</ul>
			</section>
		</>
	)
}

export default ContactPage
