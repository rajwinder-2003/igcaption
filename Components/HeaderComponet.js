import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const HeaderComponet = () => {
	const router = useRouter();
  return (
	<div className='bg-gradient-to-r from-purple-500 to-pink-500 w-full py-20'>
		<h1 className='text-center text-white text-5xl'>IGCaption</h1>
		<p className='text-center text-white lg:text-3xl font-thin pt-8'>Instagram Caption in English, Hindi, Punjabi</p>
		
		{/* navication for large screen */}
		<ul className='hidden lg:flex justify-center space-x-28 mt-10'>
			<Link href='/english-caption'>
				<li className={router.pathname == '/english-caption' ? 'bg-white text-lg text-[#CF4DC0] px-6 py-4 rounded-xl shadow-2xl border-2 border-[#CF4DC0] scale-150' : 'bg-white text-lg text-[#CF4DC0] px-6 py-4 rounded-xl shadow-2xl hover:cursor-pointer border-2 border-[#CF4DC0] hover:scale-150'}>English Caption</li>
			</Link>
			<Link href='/hindi-caption'>
				<li className={router.pathname == '/hindi-caption' ? 'bg-white text-lg text-[#CF4DC0] px-6 py-4 rounded-xl shadow-2xl border-2 border-[#CF4DC0] scale-150' : 'bg-white text-lg text-[#CF4DC0] px-6 py-4 rounded-xl shadow-2xl hover:cursor-pointer border-2 border-[#CF4DC0] hover:scale-150'}>Hindi Caption</li>
			</Link>
			<Link href='/punjabi-caption'>
				<li className={router.pathname == '/punjabi-caption' ? 'bg-white text-lg text-[#CF4DC0] px-6 py-4 rounded-xl shadow-2xl border-2 border-[#CF4DC0] scale-150' : 'bg-white text-lg text-[#CF4DC0] px-6 py-4 rounded-xl shadow-2xl hover:cursor-pointer border-2 border-[#CF4DC0] hover:scale-150'}>Punjabi Caption</li>
			</Link>
		</ul>

		{/* navication for mobile */}
		<div className='flex justify-center'>
			<ul className='space-y-8 mt-10 lg:hidden'>
				<Link href='/english-caption'>
					<li className={router.pathname == '/english-caption' ? 'bg-white text-lg text-[#CF4DC0] px-6 py-4 rounded-xl shadow-2xl border-2 border-[#CF4DC0] scale-150' : 'bg-white text-lg text-[#CF4DC0] px-6 py-4 rounded-xl shadow-2xl hover:cursor-pointer border-2 border-[#CF4DC0] hover:scale-150'}>English Caption</li>
				</Link>
				<Link href='/hindi-caption'>
					<li className={router.pathname == '/hindi-caption' ? 'bg-white text-lg text-[#CF4DC0] px-6 py-4 rounded-xl shadow-2xl border-2 border-[#CF4DC0] scale-150' : 'bg-white text-lg text-[#CF4DC0] px-6 py-4 rounded-xl shadow-2xl hover:cursor-pointer border-2 border-[#CF4DC0] hover:scale-150'}>Hindi Caption</li>
				</Link>
				<Link href='/punjabi-caption'>
					<li className={router.pathname == '/punjabi-caption' ? 'bg-white text-lg text-[#CF4DC0] px-6 py-4 rounded-xl shadow-2xl border-2 border-[#CF4DC0] scale-150' : 'bg-white text-lg text-[#CF4DC0] px-6 py-4 rounded-xl shadow-2xl hover:cursor-pointer border-2 border-[#CF4DC0] hover:scale-150'}>Punjabi Caption</li>
				</Link>
			</ul>
		</div>

	</div>
  )
}

export default HeaderComponet