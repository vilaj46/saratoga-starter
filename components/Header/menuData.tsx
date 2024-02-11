import _ from '../../public/en-us.json'
import routes from '../../constants/routes'

const menuData = {
	brunswick: [
		{
			id: 1,
			title: _.Welcome,
			path: routes.home,
			newTab: false,
		},
		{
			id: 2,
			title: _.GuestRooms,
			path: routes.lodging,
			newTab: false,
		},
		{
			id: 3,
			title: _.TheInnKeepers,
			path: '',
			newTab: false,
			submenu: [
				{
					id: 31,
					title: _.GiftCertificates,
					path: routes.giftCertificates,
					newTab: false,
				},
				{
					id: 32,
					title: _.Directions,
					path: routes.location,
					newTab: false,
				},
				{
					id: 33,
					title: _.ContactUs,
					path: routes.contact,
					newTab: false,
				},
				{
					id: 34,
					title: _.Blogs,
					path: routes.blogs,
					newTab: false,
				},
			],
		},
		{
			id: 4,
			title: _.WeAreLocated,
			path: routes.saratogaSprings,
			newTab: false,
		},
		{
			id: 5,
			title: _.OutAndAbout,
			path: routes.explore,
			newTab: false,
		},
	],
	unionGables: [
		{
			id: 1,
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
		{
			id: 2,
			title: _.Rooms,
			path: '',
			newTab: false,
			submenu: [
				{
					id: 21,
					title: _.MainMansion,
					path: routes.mainMansion,
					newTab: false,
				},
				{
					id: 22,
					title: _.CarriageHouse,
					path: routes.carriageHouse,
					newTab: false,
				},
			],
		},
		{
			id: 3,
			title: _.Promotions,
			path: '',
			newTab: false,
			submenu: [
				{
					id: 31,
					title: _.GiftCertificates,
					path: routes.giftCertificates,
					newTab: false,
				},
				{
					id: 31,
					title: _.TheSacredUnion,
					path: routes.sacredUnion,
					newTab: false,
				},
			],
		},
		{
			id: 4,
			title: _.SaratogaSprings,
			path: '',
			newTab: false,
			submenu: [
				{
					id: 41,
					title: _.SaratogaEvents,
					path: routes.saratogaEvents,
					newTab: false,
				},
				{
					id: 42,
					title: _.DiningGuide,
					path: routes.dining,
					newTab: false,
				},
				{
					id: 43,
					title: _.SaratogaRaceCourse,
					path: routes.saratogaRaceCourse,
					newTab: false,
				},
				{
					id: 44,
					title: _.SaratogaPerformingArtsCenter,
					path: routes.saratogaPerformingArts,
					newTab: false,
				},
				{
					id: 45,
					title: _.SkidmoreCollege,
					path: routes.skidmoreCollege,
					newTab: false,
				},
				{
					id: 46,
					title: _.SaratogaSpringsCityCenter,
					path: routes.saratogaSprings,
					newTab: false,
				},
				{
					id: 47,
					title: _.SaratogaSpaStatePark,
					path: routes.spaStatePark,
					newTab: false,
				},
			],
		},
		{
			id: 5,
			title: _.Gallery,
			path: routes.gallery,
			newTab: false,
		},
		{
			id: 6,
			title: _.Spa,
			path: routes.spa,
			newTab: false,
		},
	],
}
export default menuData
