import NavBarBtn from '@/components/NavBarBtn'
import ProjectCard from '@/components/ProjectCard'
import SocialLinkBtn from '@/components/SocialLinkBtn'
import TechChip from '@/components/TechChip'
import Widgets from '@/components/Widgets'
import React from 'react'

export default function Home() {
	return (
		<main className='grid grid-cols-4 py-4 px-[15%] gap-2'>
			<nav className='col-span-full px-8 rounded-3xl navbar bg-base-200'>
				<p className='font-bold navbar-start select-none'>tcloma</p>
				<ul className='navbar-end menu menu-horizontal'>
					<NavBarBtn name='me' />
					<NavBarBtn name='projects' />
					<NavBarBtn name='contact' />
				</ul>
			</nav>
			<div className='col-span-3 bento-square'>
				<h1>Tyrone Cloma</h1>
				<p>
					job description Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio laborum unde accusantium
					vel asperiores debitis recusandae corrupti consequuntur reiciendis quas nobis minus nesciunt deleniti, nostrum
					facere fuga, ex dolor perspiciatis?
				</p>
			</div>
			<div className='col-span-1 bento-square'>Contact tcloma@proton.me</div>
			<ul className='flex justify-between gap-2 col-span-full'>
				<SocialLinkBtn name='LinkedIn' />
				<SocialLinkBtn name='GitHub' />
				<SocialLinkBtn name='Twitter' />
				<SocialLinkBtn name='Resume' />
			</ul>
			<div className='col-span-1 bento-square grid grid-cols-2 gap-2'>
				<TechChip name='TypeScript' />
				<TechChip name='React' />
				<TechChip name='Next.js' />
				<TechChip name='Rust' />
				<p className='col-span-2 text-center font-bold'>Tech I build products with</p>
			</div>
			<div className='col-span-3 bento-square text-4xl'>
				professional summary Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus laboriosam eligendi est
				facere sunt dolor recusandae quisquam quis, reiciendis voluptates exercitationem ducimus officia praesentium
				minima nihil tempore vitae numquam distinctio.
			</div>
			<ProjectCard projectName='Hover'/>
			<ProjectCard projectName='Atlas View'/>
			<Widgets />
		</main>
	)
}
