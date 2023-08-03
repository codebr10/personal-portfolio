import { NextResponse } from 'next/server'

import { getWorks } from '@/lib/works'

export async function GET() {
	try {
		const works = getWorks()
		return NextResponse.json({ works })
	} catch (err) {
		return NextResponse.json({ message: 'Error', err })
	}
}
