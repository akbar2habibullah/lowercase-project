import {createStyleBuilder, extractTwColor} from 'react-native-zephyr';
import {View, Text} from 'react-native';

export const {styles, useStyles, makeStyledComponent, styled} =
  createStyleBuilder({
    extendTheme: {
      colors: {
        ...extractTwColor({twColor: 'yellow', name: 'yellow'}),
        ...extractTwColor({twColor: 'amber', name: 'amber'}),
        ...extractTwColor({twColor: 'orange', name: 'orange'}),
        ...extractTwColor({twColor: 'warmGray', name: 'warmGray'}),
      },
    },
  });

export const StyledView = makeStyledComponent(View);
export const StyledText = makeStyledComponent(Text);
