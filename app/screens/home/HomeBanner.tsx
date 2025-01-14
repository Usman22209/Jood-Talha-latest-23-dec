import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import PagerView from 'react-native-pager-view';
import { Light, Dark, Banner } from 'assets/svgs';
import { horizontalScale, verticalScale } from 'utils/Dimensions.util';
import { mockSliderItemsAPI } from 'data/SliderItems.data';
import Image from 'components/Image';
import { getImage } from 'utils/URLs.util';
import { useFetchSliderItemsQuery } from 'store/queries/home.query';

const HomeBanner: React.FC = () => {
  const [activePage, setActivePage] = useState(0);
  const { data: items, error } = useFetchSliderItemsQuery();
  console.log('useFetchSliderItemsQuery ', error, items);

  const onPageSelected = (event: { nativeEvent: { position: number } }) => {
    setActivePage(event.nativeEvent.position);
  };

  const banners = [
    ...mockSliderItemsAPI?.value,
    ...mockSliderItemsAPI?.value,
    ...mockSliderItemsAPI?.value
  ];

  return (
    <View style={styles.container}>
      <PagerView style={styles.carousel} initialPage={0} onPageSelected={onPageSelected}>
        {banners?.map((item, index) => (
          <View style={styles.page} key={index}>
            <Image
              url={getImage(item?.AttachmentFiles?.[0]?.ServerRelativeUrl)}
              style={styles.banner}
              Placeholder={Banner}
            />
          </View>
        ))}
      </PagerView>
      <View style={styles.indicatorContainer}>
        {banners.map((_, index) => (
          <View key={index} style={styles.indicator}>
            {activePage === index ? <Dark /> : <Light />}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: verticalScale(180),
    marginVertical: verticalScale(8),
    marginBottom: verticalScale(0),
    width: '100%'
  },
  carousel: {
    flex: 1
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  banner: {
    width: '100%',
    height: verticalScale(180),
    resizeMode: 'contain'
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(4)
  },
  indicator: {
    marginHorizontal: horizontalScale(5)
  }
});

export default HomeBanner;
