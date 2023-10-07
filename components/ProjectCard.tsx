'use client'

import React from 'react'

type Props = { projectName: string }

export default function ProjectCard({ projectName }: Props) {
	return (
		<div className='col-span-2 aspect-square bento-square flex flex-col items-center justify-center'>{projectName}</div>
	)
}
