import React, { useState } from 'react';
import { ActivityIndicator, Image as ReactImage, StyleSheet, View } from 'react-native';
import Colors, { alpha } from 'utils/Colors.util';

type Props = {
  url?: string;
  source?: any;
  style?: any;
  Placeholder?: any;
};

const Image = ({ style, url, source, Placeholder }: Props) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
      {Placeholder ? (
        <Placeholder />
      ) : (
        <ReactImage
          source={source ? source : { uri: url }}
          onLoad={handleImageLoad}
          style={style}
        />
      )}
      {Placeholder
        ? false
        : !isImageLoaded && (
            <View
              style={{
                width: style?.width,
                height: style?.height,
                ...pageStyles.container
              }}
            >
              <ActivityIndicator color={Colors.JOOD_BLUE} style={pageStyles.loader} />
            </View>
          )}
    </>
  );
};

const pageStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: alpha(Colors.JOOD_BLUE, 0.1),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6
  },
  loader: {}
});

export default Image;
