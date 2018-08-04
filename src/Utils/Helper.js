export const getLocationOffset = (pathname) => {
	// show/Girls
	const stripResult = pathname.split('/')
	return stripResult[stripResult.length-1]
}