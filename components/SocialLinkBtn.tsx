'use client'

import React from 'react'

type Props = { name: string }

export default function SocialLinkBtn({ name }: Props) {
	return (
		<li className='w-1/4 py-4 font-bold text-center bento-square'>
			<button>{name}</button>
		</li>
	)
}
