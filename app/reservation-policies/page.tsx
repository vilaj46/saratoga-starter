import Breadcrumb from '../../components/Common/Breadcrumb'

import { Metadata } from 'next'
import { inject } from '../../utils/inject'
import CONFIGURATION from '../../WILD/configuration'

import SectionTitle from '../../components/Common/SectionTitle'

export const metadata: Metadata = {
	title: 'Policies Page',
	description: 'Policies Page Description',
}

const ReservationPage = () => {
	return (
		<>
			<Breadcrumb
				pageName='Policies Page'
				description='Policies Page Description'
			/>

			<section className='container mt-16 dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl'>
				{CONFIGURATION.information.policies.map((policy, idx) => (
					<SectionTitle
						mb='16px'
						width='100%'
						title={inject(policy.title ?? '')}
						paragraph={inject(policy.description)}
						size={4}
						underline={true}
						key={idx}
					/>
				))}
			</section>
		</>
	)
}

export default ReservationPage
