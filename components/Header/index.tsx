'use client'
import { MouseEvent, useEffect, useRef, useState } from 'react'

import _ from '../../public/en-us.json'

import Link from 'next/link'

import Hamburger from './Hamburger'
import routes from '../../constants/routes'
import ThemeToggler from './ThemeToggler'
import Logo from './Logo'
import Navbar from './Navbar'
import { useBnb } from '../../hooks/useBnb'

const Header = () => {
	// Navbar toggle
	const navbarRef = useRef<HTMLDivElement>(null)

	const [navbarOpen, setNavbarOpen] = useState(false)
	const navbarToggleHandler = () => setNavbarOpen(!navbarOpen)
	const navbarCloseHandler = () => setNavbarOpen(false)

	// Sticky Navbar
	const [sticky, setSticky] = useState(false)
	const handleStickyNavbar = () => {
		if (window.scrollY >= 80) {
			setSticky(true)
		} else {
			setSticky(false)
		}
	}

	// const ref = useOutsideClick(() => undefined)

	useEffect(() => {
		window.addEventListener('scroll', handleStickyNavbar)
		window.addEventListener('scroll', navbarCloseHandler)
	})

	// submenu handler
	const [openIndex, setOpenIndex] = useState(-1)
	const handleSubmenu = (index: number) => {
		if (openIndex === index) {
			setOpenIndex(-1)
		} else {
			setOpenIndex(index)
		}
	}

	const headerStickyClassName =
		'dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition'
	// const headerStickyClassName = sticky
	// ? 'dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition'
	// : 'absolute bg-transparent'

	const { isBrunswick } = useBnb()

	const bookNowColor = isBrunswick
		? 'hover:brunswick-primary bg-brunswick-primary-hover'
		: 'hover:ug-primary bg-ug-primary-hover'

	return (
		<>
			<header
				className={`flex header items-center left-0 top-0 w-full z-40 ${headerStickyClassName}`}
			>
				<div className='container'>
					<div className='relative -mx-4 flex items-center justify-between'>
						<Logo sticky={sticky} />
						<div className='flex w-full items-center justify-between px-4'>
							<div>
								<Hamburger
									isOpen={navbarOpen}
									onToggle={navbarToggleHandler}
								/>
								<Navbar
									isOpen={navbarOpen}
									onClick={handleSubmenu}
									openIndex={openIndex}
									// something={ref}
								/>
							</div>
							<div className='flex items-center justify-end pr-16 lg:pr-0'>
								<Link
									className={`uppercase ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9 ${bookNowColor}`}
									href={routes.resNexus}
									target='_blank'
								>
									{_.BookNow}
								</Link>
								<div>
									<ThemeToggler />
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
