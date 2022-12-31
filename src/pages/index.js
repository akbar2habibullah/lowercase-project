import React, { useState } from 'react'
import { Dimensions, View, StyleSheet } from 'react-native'
import MapView, { MAP_TYPES, PROVIDER_DEFAULT, UrlTile } from 'react-native-maps'

import { StyledText } from '../styles'

const { width, height } = Dimensions.get('window')

const ASPECT_RATIO = width / height
const LATITUDE = 22.720555
const LONGITUDE = 75.858633
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default () => {
	const [state] = useState({
		region: {
			latitude: LATITUDE,
			longitude: LONGITUDE,
			latitudeDelta: LATITUDE_DELTA,
			longitudeDelta: LONGITUDE_DELTA,
		},
	})

	return (
		<View>
			<MapView region={state.region} mapType={MAP_TYPES.STANDARD} provider={PROVIDER_DEFAULT} rotateEnabled={false} style={{ flex: 1, ...styles.map }} showsUserLocation>
				<UrlTile urlTemplate='https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}@2x.jpg?key=6Uae6UVtzFcQsXhocJKH' />
			</MapView>
			<StyledText>TES</StyledText>
		</View>
	)
}

const styles = StyleSheet.create({
	map: {
		width: 400,
		height: 800,
	},
})
