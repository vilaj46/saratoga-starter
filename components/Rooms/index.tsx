import { ImageProps } from 'next/image'
import _ from '../../public/en-us.json'
import Split from '../Common/Split'

import {
	brunswick_room_a1,
	brunswick_room_a2,
	brunswick_room_a3,
	brunswick_room_a4,
} from '../../constants/images'

interface RoomsProps {
	description: string
	heading: string
	id: string
	images: Array<ImageProps>
}

const Rooms = ({ description, heading, id, images }: RoomsProps) => {
	return (
		<Split
			booknow
			description={description}
			heading={heading}
			id={id}
			images={[
				{
					alt: 'Brunswick Room A',
					src: brunswick_room_a1,
				},
				{
					alt: 'Brunswick Room A',
					src: brunswick_room_a2,
				},
				{
					alt: 'Brunswick Room A',
					src: brunswick_room_a3,
				},
				{
					alt: 'Brunswick Room A',
					src: brunswick_room_a4,
				},
			]}
		/>
	)
}

export default Rooms
