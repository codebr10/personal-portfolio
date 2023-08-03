import Image from 'next/image'

import { GoBack } from '@/components/Portfolio/back'
import SideBar from '@/components/Sidebar'

async function getData(slug: string) {
	const res = await fetch(`http://localhost:3000/api/works/${slug}`)

	if (res.status !== 200) {
		throw new Error('Failed to fetch data')
	}

	console.log('teste', res.status)

	return res.json()
}

export default async function PortfolioPost({
	params
}: {
	params: { slug: string }
}) {
	const { slug } = params

	const { work } = await getData(slug)

	//console.log('work: ', work)
	//console.log(slug)
	return (
		<div className="container">
			<div className="grid grid-cols-3 gap-24">
				<div>
					<SideBar />
				</div>
				<div className="col-span-2">
					<Image
						src={work.img}
						width={1280}
						height={720}
						alt="imagem do card"
						className="rounded-xl"
					/>

					<h1 className="mb-8 mt-6 font-bold text-zinc-200">
						{work.title}
					</h1>

					<p className="text-zinc-400">{work.desc}</p>

					<GoBack />
				</div>
			</div>
		</div>
	)
}
