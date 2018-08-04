export const getLocationOffset = (pathname) => {
	// show/Girls
	const stripResult = pathname.split('/')
	return stripResult[stripResult.length-1]
}

export const timeFormatter = ( time )  => {
	const hours = parseInt(time.split(':')[0])
	const mins = time.split(':')[1]
	return hours > 11 ? `${ hours-12 }:${ mins } PM`: `${ time }AM`
}