// @ts-ignore
import GpxParser from 'gpxparser'

export default class GpxUtils {
	gpxParser

	constructor(gpx) {
		this.gpxParser = new GpxParser().parse(gpx)
	}

	getGeoJson() {
		return this.gpxParser.toGeoJSON()
	}

	getTotalDistance() {
		return this.gpxParser.tracks[0].distance
	}
}
