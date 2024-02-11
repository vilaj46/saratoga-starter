import {
	FaFacebookF,
	FaInstagram,
	FaXTwitter,
	FaPinterestP,
} from 'react-icons/fa6'
import { FaTripadvisor } from 'react-icons/fa'
import { Brand } from '../../types/brand'

// TODO: Update links for Brunswick

const brandsData: Brand[] = [
	{
		id: 1,
		name: 'Facebook',
		href: 'https://www.facebook.com/UnionGables/',
		image: <FaFacebookF size={50} />,
	},
	{
		id: 2,
		name: 'Twitter',
		href: 'https://twitter.com/uniongables',
		image: <FaXTwitter size={50} />,
	},
	{
		id: 3,
		name: 'Instagram',
		href: 'https://www.instagram.com/uniongables/',
		image: <FaInstagram size={50} />,
	},
	{
		id: 4,
		name: 'Pinterest',
		href: 'https://www.pinterest.com/uniongables/',
		image: <FaPinterestP size={50} />,
	},
	{
		id: 5,
		name: 'Tripadvisor',
		href: 'https://www.tripadvisor.com/Hotel_Review-g48562-d80181-Reviews-Union_Gables_Inn-Saratoga_Springs_New_York.html',
		image: <FaTripadvisor size={50} />,
	},
]

export default brandsData
