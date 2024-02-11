import _ from '../../public/en-us.json'
import { Menu } from '../../types/menu'
import routes from '../../constants/routes'

const menuData: Menu[] = [
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
]
export default menuData
