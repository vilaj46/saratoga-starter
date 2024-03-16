import AboutSectionOne from '../../components/About/AboutSectionOne'
import AboutSectionTwo from '../../components/About/AboutSectionTwo'
import Breadcrumb from '../../components/Common/Breadcrumb'

import { Metadata } from 'next'
import Rooms from '../../components/Rooms'

export const metadata: Metadata = {
	title: 'Rooms Page',
	description: 'Rooms page description',
	// other metadata
}

const RoomsPage = () => {
	return (
		<>
			<Breadcrumb
				pageName='Guest Rooms'
				description='Brunswick Bed and Breakfast is proud to offer uniquely decorated and luxuriously appointed guest rooms. The distinctive Saratoga Springs lodging of our B&B inn is sure to delight you and make your stay in the area that much more special and memorable.'
			/>
			{/* <Rooms
				description='One of three rooms located on the first floor, Room A is ideal for long or short term stays. This unique two-room suite features a queen bed and spacious sitting areas. Original stained glass windows adorn the front room sitting area. The room adjacent offers a single sleigh bed and additional area to relax. All rooms offer central AC/heat and feature private bath with shower, custom amenities, hairdryers, 32" flat screen TVs, free Wi-Fi, complementary bottles of Saratoga Water.'
				heading={'Explore Our Saratoga Springs Lodging Room A'}
			/> */}
		</>
	)
}

export default RoomsPage
