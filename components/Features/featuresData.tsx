import { GiCharm } from 'react-icons/gi'
import {
	FaBed,
	FaBuilding,
	FaEgg,
	FaHorse,
	FaLocationDot,
} from 'react-icons/fa6'

import { Bnb } from '../../types/Bnb'
import config from '../../constants/config'
import { Feature } from '../../types/feature'

const isBrunswick = config.bnb === Bnb.Brunswick
const featuresData: Feature[] = [
	{
		id: 1,
		icon: <GiCharm size={50} />,
		title: 'Historic Charm',
		paragraph: `A Gothic Victorian building built in 1886, ${
			isBrunswick ? 'The Brunswick at Saratoga' : 'The Union Gables Inn'
		} Bed & Breakfast offers an elegant and historic lodging experience.`,
	},
	{
		id: 2,
		icon: <FaLocationDot size={50} />,
		title: 'Prime Location',
		paragraph:
			'Situated on Union Avenue in the heart of Saratoga Springs, guests enjoy easy access to renowned attractions like the Saratoga Race Course and the Saratoga Performing Arts Center.',
	},
	{
		id: 3,
		icon: <FaBed size={50} />,
		title: 'Comfortable Accommodations',
		paragraph:
			'Choose from king- and queen-bed options with updated private baths, ensuring a comfortable stay for every guest.',
	},
	{
		id: 4,
		icon: <FaEgg size={50} />,
		title: 'Delicious Breakfast',
		paragraph:
			'Start your day with a full breakfast served each morning, prepared with warm-hearted hospitality to delight your senses.',
	},
	{
		id: 5,
		icon: <FaHorse size={50} />,
		title: 'Proximity to Attractions',
		paragraph:
			'Just steps away from significant landmarks including the Saratoga Race Course, Fasig-Tipton horse sales grounds, and the National Museum of Racing and Hall of Fame.',
	},
	{
		id: 6,
		icon: <FaBuilding size={50} />,
		title: 'Relaxation and Exploration',
		paragraph: `Whether you're interested in horses, history, health, or simply relaxation, Saratoga Springs and Saratoga County offer diverse activities to suit every preference, with the ${
			isBrunswick ? 'Brunswick' : 'Union Gables'
		} providing a serene retreat amidst the bustle of the city.`,
	},
]
export default featuresData
