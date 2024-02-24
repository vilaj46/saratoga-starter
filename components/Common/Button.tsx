import { useBnb } from '../../hooks/useBnb'

interface ButtonProps {
	children: string | JSX.Element | JSX.Element[]
	micro?: boolean
}

const Button = ({ children, micro }: ButtonProps) => {
	// Secondary:
	// <Link
	// 		href=''
	// 		className='rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80'
	// 	>
	// 		bbbbbbbbbbbb
	// 	</Link>
	const { isBrunswick } = useBnb()
	const bookNowColor = isBrunswick
		? 'hover:brunswick-primary bg-brunswick-primary-hover'
		: 'hover:ug-primary bg-ug-primary-hover'

	const padding = micro ? 'px-2 py-1' : 'px-8 py-3'
	const className = `uppercase ease-in-up shadow-btn hover:shadow-btn-hover rounded-sm ${padding} text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9 ${bookNowColor}`

	return <button className={className}>{children}</button>
}

export default Button
