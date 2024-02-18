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
import { useInjectStrings } from '../../hooks/useInject'

const isBrunswick = config.bnb === Bnb.Brunswick
const featuresData: Feature[] = [
	{
		id: 1,
		icon: <GiCharm size={50} />,
		title: _.HistoricCharm,
		paragraph: useInjectStrings(_.AGothicVictorianBuilding, [
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
		paragraph: useInjectStrings(_.WhetherYouAreInterested, [
			isBrunswick ? _.Brunswick : _.UnionGables,
		]),
	},
]
export default featuresData
