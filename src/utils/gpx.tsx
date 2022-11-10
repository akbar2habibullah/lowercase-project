// @ts-ignore
import GpxParser from 'gpxparser';

export default class GpxUtils {
  gpxParser: any;

  constructor(gpx: string) {
    this.gpxParser = new GpxParser();
    this.gpxParser.parse(gpx);
  }

  getGeoJson() {
    return this.gpxParser.toGeoJSON();
  }

  getTotalDistance() {
    return this.gpxParser.tracks[0].distance;
  }
}
