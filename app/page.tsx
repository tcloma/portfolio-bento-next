import NavBarBtn from '@/components/NavBarBtn'
import SocialLinkBtn from '@/components/SocialLinkBtn'
import Widgets from '@/components/Widgets'
import React from 'react'

export default function Home() {
	return (
		<main className='flex flex-col items-center h-screen py-4 px-[15%] gap-2'>
			<nav className='px-8 rounded-3xl navbar bg-base-200'>
				<p className='font-bold navbar-start select-none'>tcloma</p>
				<ul className='navbar-end menu menu-horizontal'>
					<NavBarBtn name='me' />
					<NavBarBtn name='projects' />
					<NavBarBtn name='contact' />
				</ul>
			</nav>
			<section className='flex gap-2'>
				<div className='w-2/3 bento-square'>
					<h1>Tyrone Cloma</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio laborum unde accusantium vel asperiores
						debitis recusandae corrupti consequuntur reiciendis quas nobis minus nesciunt deleniti, nostrum facere fuga,
						ex dolor perspiciatis?
					</p>
				</div>
				<div className='w-1/3 bento-square'>Contact tcloma@proton.me</div>
			</section>
			<ul className='flex justify-between w-full gap-2'>
				<SocialLinkBtn name='LinkedIn' />
				<SocialLinkBtn name='GitHub' />
				<SocialLinkBtn name='Twitter' />
				<SocialLinkBtn name='Resume' />
			</ul>
			<section className='flex gap-2'>
				<div className='w-1/3 bento-square'>tech stack</div>
				<div className='w-2/3 bento-square'>professional summary Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus laboriosam eligendi est facere sunt dolor recusandae quisquam quis, reiciendis voluptates exercitationem ducimus officia praesentium minima nihil tempore vitae numquam distinctio.</div>
			</section>
			<Widgets />
		</main>
	)
}
