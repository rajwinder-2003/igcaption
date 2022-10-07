import Link from 'next/link'
import React from 'react'

const CommonHeader = (props) => {
  return (
	<div className='bg-gradient-to-r from-purple-500 to-pink-500 w-full py-20'>
		<h1 className='text-center text-white text-3xl lg:text-5xl'>{props.title}</h1>
		<p className='text-center text-white lg:text-3xl font-thin pt-8 mx-4'>{props.subtitle}</p>
		
		{/* navication for large screen */}
		<ul className='hidden lg:flex justify-center space-x-3 mt-10 mx-5'>
			<Link href={`/${props.slug}`}>
				<li className='bg-white text-sm font-medium text-[#CF4DC0] px-2 py-1 rounded-3xl shadow-2xl hover:cursor-pointer border-2 border-[#CF4DC0] hover:scale-90 focus:scale-90'>NEW</li>
			</Link>
			<Link href={`${props.slug}/love`}>
				<li className='bg-white text-sm font-medium text-[#CF4DC0] px-2 py-1 rounded-3xl shadow-2xl hover:cursor-pointer border-2 border-[#CF4DC0] hover:scale-90 focus:scale-90'>LOVE</li>
			</Link>
			<Link href={`${props.slug}/sad`}>
				<li className='bg-white text-sm font-medium text-[#CF4DC0] px-2 py-1 rounded-3xl shadow-2xl hover:cursor-pointer border-2 border-[#CF4DC0] hover:scale-90 focus:scale-90'>SAD</li>
			</Link>
			<Link href={`${props.slug}/alone`}>
				<li className='bg-white text-sm font-medium text-[#CF4DC0] px-2 py-1 rounded-3xl shadow-2xl hover:cursor-pointer border-2 border-[#CF4DC0] hover:scale-90 focus:scale-90'>ALONE</li>
			</Link>
			<Link href={`${props.slug}/breakup`}>
				<li className='bg-white text-sm font-medium text-[#CF4DC0] px-2 py-1 rounded-3xl shadow-2xl hover:cursor-pointer border-2 border-[#CF4DC0] hover:scale-90 focus:scale-90'>BREAKUP</li>
			</Link>
			<Link href={`${props.slug}/attitude`}>
				<li className='bg-white text-sm font-medium text-[#CF4DC0] px-2 py-1 rounded-3xl shadow-2xl hover:cursor-pointer border-2 border-[#CF4DC0] hover:scale-90 focus:scale-90'>ATTITUDE</li>
			</Link>
			<Link href={`${props.slug}/friends`}>
				<li className='bg-white text-sm font-medium text-[#CF4DC0] px-2 py-1 rounded-3xl shadow-2xl hover:cursor-pointer border-2 border-[#CF4DC0] hover:scale-90 focus:scale-90'>FRIENDS</li>
			</Link>
			<Link href={`${props.slug}/funny`}>
				<li className='bg-white text-sm font-medium text-[#CF4DC0] px-2 py-1 rounded-3xl shadow-2xl hover:cursor-pointer border-2 border-[#CF4DC0] hover:scale-90 focus:scale-90'>FUNNY</li>
			</Link>
			<Link href={`${props.slug}/motivational`}>
				<li className='bg-white text-sm font-medium text-[#CF4DC0] px-2 py-1 rounded-3xl shadow-2xl hover:cursor-pointer border-2 border-[#CF4DC0] hover:scale-90 focus:scale-90'>MOTIVATIONAL</li>
			</Link>
		</ul>

		{/* navication for mobile */}
		<div className='flex justify-center'>
			<div className=''>
				<ul className='flex space-x-4 mt-7 mx-5 lg:hidden'>
					<Link href={props.slug}>
						<li className='bg-white text-sm font-medium text-[#CF4DC0] px-4 py-1 rounded-3xl shadow-2xl border-2 border-[#CF4DC0] focus:scale-50'>NEW</li>
					</Link>
					<Link href={`${props.slug}/love`}>
						<li className='bg-white text-sm font-medium text-[#CF4DC0] px-4 py-1 rounded-3xl shadow-2xl border-2 border-[#CF4DC0] focus:scale-50'>LOVE</li>
					</Link>
					<Link href={`${props.slug}/sad`}>
						<li className='bg-white text-sm font-medium text-[#CF4DC0] px-4 py-1 rounded-3xl shadow-2xl border-2 border-[#CF4DC0] focus:scale-50'>SAD</li>
					</Link>
				</ul>
				<ul className='flex space-x-4 mt-4 mx-5 lg:hidden'>
					<Link href={`${props.slug}/alone`}>
						<li className='bg-white text-sm font-medium text-[#CF4DC0] px-4 py-1 rounded-3xl shadow-2xl border-2 border-[#CF4DC0] focus:scale-50'>ALONE</li>
					</Link>
					<Link href={`${props.slug}/breakup`}>
						<li className='bg-white text-sm font-medium text-[#CF4DC0] px-4 py-1 rounded-3xl shadow-2xl border-2 border-[#CF4DC0] focus:scale-50'>BREAKUP</li>
					</Link>
				</ul>
				<ul className='flex space-x-4 mt-4 mx-5 lg:hidden'>
					<Link href={`${props.slug}/friends`}>
						<li className='bg-white text-sm font-medium text-[#CF4DC0] px-4 py-1 rounded-3xl shadow-2xl border-2 border-[#CF4DC0] focus:scale-50'>FRIENDS</li>
					</Link>
					<Link href={`${props.slug}/funny`}>
						<li className='bg-white text-sm font-medium text-[#CF4DC0] px-4 py-1 rounded-3xl shadow-2xl border-2 border-[#CF4DC0] focus:scale-50'>FUNNY</li>
					</Link>
				</ul>
				<ul className='flex space-x-4 mt-4 mx-5 lg:hidden'>
					<Link href={`${props.slug}/motivational`}>
						<li className='bg-white text-sm font-medium text-[#CF4DC0] px-4 py-1 rounded-3xl shadow-2xl border-2 border-[#CF4DC0] focus:scale-50'>MOTIVATIONAL</li>
					</Link>
					<Link href={`${props.slug}/attitude`}>
						<li className='bg-white text-sm font-medium text-[#CF4DC0] px-4 py-1 rounded-3xl shadow-2xl border-2 border-[#CF4DC0] focus:scale-50'>ATTITUDE</li>
					</Link>
				</ul>
			</div>
		</div>

	</div>
  )
}

export default CommonHeader