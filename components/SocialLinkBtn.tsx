'use client'

import React from 'react'

type Props = {
	name: string
	classNames?: string
}

export default function SocialLinkBtn({ name, classNames }: Props) {
	return (
		<li className={`w-1/4 py-4 font-bold text-center bento-square ${classNames}`}>
			<button>{name}</button>
		</li>
	)
}
