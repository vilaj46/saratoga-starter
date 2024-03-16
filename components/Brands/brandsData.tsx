import {
	FaFacebookF,
	FaInstagram,
	FaXTwitter,
	FaPinterestP,
} from 'react-icons/fa6'
import { FaTripadvisor } from 'react-icons/fa'

import CONFIGURATION from '../../WILD/configuration'
import { Brand } from '../../types/brand'

const brandsData = {
	brunswick: [
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
	],
	unionGables: [
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
	],
}

const createBrandsData = () => {
	const facebook: Brand = {
		id: 1,
		name: 'Facebook',
		href: CONFIGURATION.socialMedia.facebook,
		image: <FaFacebookF size={50} />,
	}
	const instagram = {
		id: 2,
		name: 'Instagram',
		href: CONFIGURATION.socialMedia.instagram,
		image: <FaInstagram size={50} />,
	}
	const tripadvisor = {
		id: 3,
		name: 'Tripadvisor',
		href: CONFIGURATION.socialMedia.tripadvisor,
		image: <FaTripadvisor size={50} />,
	}

	return [facebook, instagram, tripadvisor].filter((social) => {
		return social.href.trim().length > 0
	})
}

export default createBrandsData()
