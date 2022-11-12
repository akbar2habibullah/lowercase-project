import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import MapView, {MAP_TYPES, PROVIDER_DEFAULT, UrlTile} from 'react-native-maps';

import {StyledView, styles} from '../styles';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 22.720555;
const LONGITUDE = 75.858633;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default () => {
  const [state] = useState({
    region: {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
  });

  return (
    <StyledView style={styles('relative')}>
      <MapView
        region={state.region}
        mapType={MAP_TYPES.NONE}
        provider={PROVIDER_DEFAULT}
        rotateEnabled={false}
        style={styles('max-w:0', 'max-h:0', 'inset:0', 'absolute', 'z:0')}
        showsUserLocation>
        <UrlTile
          urlTemplate="http://a.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
          maximumZ={19}
        />
      </MapView>
    </StyledView>
  );
};
