import React from 'react'

type Props = {
	name: string
}

export default function NavBarBtn({ name }: Props) {
	return (
		<li>
			<a>{name}</a>
		</li>
	)
}
