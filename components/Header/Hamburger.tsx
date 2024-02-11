const Hamburger = ({
	isOpen,
	onToggle,
}: {
	isOpen: boolean
	onToggle: () => void
}) => {
	return (
		<button
			aria-label='Mobile Menu'
			className='absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden'
			id='navbarToggler'
			onClick={onToggle}
		>
			<span
				className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
					isOpen ? ' top-[7px] rotate-45' : ' '
				}`}
			/>
			<span
				className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
					isOpen ? 'opacity-0 ' : ' '
				}`}
			/>
			<span
				className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
					isOpen ? ' top-[-8px] -rotate-45' : ' '
				}`}
			/>
		</button>
	)
}

export default Hamburger
