'use client'
import { useState } from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6'
import Image, { ImageProps } from 'next/image'
import ReactSimplyCarousel from 'react-simply-carousel'

const ImageCarousel = ({ images }: { images: Array<ImageProps> }) => {
	const [activeSlideIndex, setActiveSlideIndex] = useState(0)

	return (
		<div>
			<ReactSimplyCarousel
				activeSlideIndex={activeSlideIndex}
				onRequestChange={setActiveSlideIndex}
				itemsToShow={1}
				itemsToScroll={1}
				forwardBtnProps={{
					//here you can also pass className, or any other button element attributes
					style: {
						alignSelf: 'center',
						background: 'black',
						border: 'none',
						borderRadius: '50%',
						color: 'white',
						cursor: 'pointer',
						fontSize: '20px',
						height: 30,
						lineHeight: 1,
						textAlign: 'center',
						width: 30,
					},
					children: <FaArrowRight />,
				}}
				backwardBtnProps={{
					//here you can also pass className, or any other button element attributes
					style: {
						alignSelf: 'center',
						background: 'black',
						border: 'none',
						borderRadius: '50%',
						color: 'white',
						cursor: 'pointer',
						fontSize: '20px',
						height: 30,
						lineHeight: 1,
						textAlign: 'center',
						width: 30,
					},
					children: <FaArrowLeft />,
				}}
				responsiveProps={[
					{
						itemsToShow: 1,
						itemsToScroll: 2,
						minWidth: 768,
					},
				]}
				speed={400}
				easing='linear'
			>
				{images.map((image) => (
					<div
						className='relative'
						key={image.src.toString()}
						style={{ width: 451, height: 300 }}
					>
						<Image
							{...image}
							fill
							className='drop-shadow-three mx-auto max-w-full dark:drop-shadow-none lg:mr-0'
						/>
					</div>
				))}
			</ReactSimplyCarousel>
		</div>
	)
}

export default ImageCarousel
