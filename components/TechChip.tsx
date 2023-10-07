import React from 'react'

type Props = { name: string }

export default function TechChip({ name }: Props) {
	return <div className='bg-base-100 col-span-1 aspect-square rounded-md flex flex-col justify-center items-center'>{name}</div>
}
