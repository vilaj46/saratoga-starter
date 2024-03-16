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
import _ from '../../public/en-us.json'
import { inject, injectString } from '../../utils/inject'
import CONFIGURATION from '../../WILD/configuration'

const isBrunswick = config.bnb === Bnb.Brunswick
const featuresData: Feature[] = [
	{
		id: 1,
		icon: <GiCharm size={50} />,
		title: _.HistoricCharm,
		paragraph: injectString(_.AGothicVictorianBuilding, [
			isBrunswick ? _.TheBrunswickAtSaratoga : _.TheUnionGablesInn,
		]),
	},
	{
		id: 2,
		icon: <FaLocationDot size={50} />,
		title: _.PrimeLocation,
		paragraph: _.SituatedOnUnionAve,
	},
	{
		id: 3,
		icon: <FaBed size={50} />,
		title: _.ComfortableAccomodations,
		paragraph: _.ChooseFromKingAndQueenBed,
	},
	{
		id: 4,
		icon: <FaEgg size={50} />,
		title: _.DeliciousBreakfast,
		paragraph: _.StartYourDay,
	},
	{
		id: 5,
		icon: <FaHorse size={50} />,
		title: _.ProximityToAttractions,
		paragraph: _.JustStepsFrom,
	},
	{
		id: 6,
		icon: <FaBuilding size={50} />,
		title: _.RelaxtionAndExploration,
		paragraph: injectString(_.WhetherYouAreInterested, [
			isBrunswick ? _.Brunswick : _.UnionGables,
		]),
	},
]

const getIcon = (idx: number) => {
	switch (idx) {
		case 0:
			return <GiCharm size={50} />
		case 1:
			return <FaLocationDot size={50} />
		case 2:
			return <FaBed size={50} />
		case 3:
			return <FaEgg size={50} />
		case 4:
			return <FaHorse size={50} />
		default:
			return <FaBuilding size={50} />
	}
}

const createFeaturesData = (): Array<Feature> => {
	const { reasonsToStay } = CONFIGURATION
	return reasonsToStay.map((reason, idx) => {
		const icon = getIcon(idx)
		return {
			id: idx,
			icon,
			title: inject(reason.title),
			paragraph: inject(reason.description),
		}
	})
}

export default createFeaturesData()
