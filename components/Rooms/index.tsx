import _ from '../../public/en-us.json'
import routes from '../../constants/routes'
import Button from '../Common/Button'
import Heading from '../Common/Heading'
import Paragraph from '../Common/Paragraph'

interface RoomsProps {
	description: string
	heading: string
	href?: string
}

const Rooms = ({ description, heading, href }: RoomsProps) => {
	const defaultHref = href ?? routes.resNexus

	return (
		<div>
			<Heading size={3}>{heading}</Heading>
			<Button micro>{_.BookNow}</Button>
			<Paragraph>{description}</Paragraph>
		</div>
	)
}

export default Rooms
