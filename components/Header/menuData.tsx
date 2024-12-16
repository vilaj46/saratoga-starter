import _ from '../../public/en-us.json'
import routes from '../../constants/routes'

const MENU_IDS = {
	HOME: 1,
	ABOUT_US: 2,
	POLICIES: 3,
	CONTACT: 4,
} as const

const menuData = {
	brunswick: [
		{
			id: MENU_IDS.HOME,
			title: _.Welcome,
			path: routes.home,
			newTab: false,
		},
		{
			id: MENU_IDS.POLICIES,
			title: _.ReservationPolicies,
			path: routes.reservationPolicies,
			newTab: false,
		},
		{
			id: MENU_IDS.CONTACT,
			title: _.ContactUs,
			path: routes.contact,
			newTab: false,
		},
	],
	unionGables: [
		{
			id: MENU_IDS.ABOUT_US,
			title: _.AboutUs,
			path: '',
			newTab: false,
			submenu: [
				{
					id: 11,
					title: _.AboutUs,
					path: routes.aboutUs,
					newTab: false,
				},
				{
					id: 12,
					title: _.Breakfast,
					path: routes.breakfast,
					newTab: false,
				},
				{
					id: 13,
					title: _.PetFriendly,
					path: routes.petFriendly,
					newTab: false,
				},
				{
					id: 14,
					title: _.ReservationPolicies,
					path: routes.reservationPolicies,
					newTab: false,
				},
				{
					id: 15,
					title: _.Reviews,
					path: routes.reviews,
					newTab: false,
				},
				{
					id: 16,
					title: _.Location,
					path: routes.location,
					newTab: false,
				},
				{
					id: 17,
					title: _.Contact,
					path: routes.contact,
					newTab: false,
				},
			],
		},
	],
}
export default menuData
