const works = [
	{
		slug: 'portfolio-1',
		title: 'Portfolio 1',
		desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.',
		img: '/images/portfolio1.png'
	},
	{
		slug: 'portfolio-2',
		title: 'Portfolio 2',
		desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
		img: '/images/portfolio2.png'
	},
	{
		slug: 'portfolio-3',
		title: 'Portfolio 3',
		desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.',
		img: '/images/portfolio3.png'
	}
]

export const getWorks = () => works

export const getWorksBySlug = (slug: string) => {
	return works.find((works) => works.slug === slug)
}
