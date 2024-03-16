import _ from '../../public/en-us.json'
import { inject } from '../../utils/inject'

import SectionTitle from '../Common/SectionTitle'
import SingleFeature from './SingleFeature'
import featuresData from './featuresData'
import content from '../../WILD/content.json'

const Features = () => {
	const title = inject(content.HOME_PAGE.Reasons_Title)
	const paragraph = inject(content.HOME_PAGE.Reasons_Description)
	return (
		<>
			<section
				id='features'
				className='py-16 md:py-20 lg:py-28'
			>
				<div className='container'>
					<SectionTitle
						title={title}
						paragraph={paragraph}
						center
					/>

					<div className='grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3'>
						{featuresData.map((feature) => (
							<SingleFeature
								key={feature.id}
								feature={feature}
							/>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default Features
