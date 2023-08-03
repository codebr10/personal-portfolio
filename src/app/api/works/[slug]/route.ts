import { NextResponse } from 'next/server'

import { getWorksBySlug } from '@/lib/works'

export async function GET(request: Request) {
	try {
		const slug = request.url.split('works/')[1]
		const work = getWorksBySlug(slug)
		if (!work) {
			return NextResponse.json({ message: 'Error' }, { status: 404 })
		}
		return NextResponse.json({ work })
	} catch (err) {
		return NextResponse.json({ message: 'Error', err })
	}
}
