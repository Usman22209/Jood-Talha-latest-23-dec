import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Colors, { alpha } from 'utils/Colors.util';
import { vw } from 'utils/Dimensions.util';
import { StarFull } from 'assets/svgs';
import Font from 'utils/Font.util';
import i18n from 'i18n-translate';
import Image from 'components/Image';
import { useFetchVendorMasterQuery } from 'store/queries/home.query';

interface Vendor {
  id: string;
  name: string;
  category: string;
  rating: number;
  discount: string;
  logo: any;
}

const FeaturedVendors: React.FC = () => {
  const { data: items } = useFetchVendorMasterQuery();

  // Extract the list of vendors from the API response
  const vendors: Vendor[] =
    items?.value
      ?.filter((item: any, index: number) => index < 10)
      .map((item: any) => ({
        id: item.id,
        name: item.fields?.Vendor_x002f_Branch_x0020_Name,
        category: item.fields?.Category,
        rating: item.fields?.Rating,
        discount: item.fields?.Discount,
        logo: item.fields?.logo
      })) || [];

  const otherVendors: Vendor[] =
    items?.value
      ?.filter((item: any, index: number) => index > 10)
      .map((item: any) => ({
        id: item.id,
        name: item.fields?.Vendor_x002f_Branch_x0020_Name,
        category: item.fields?.Category,
        rating: item.fields?.Rating,
        discount: item.fields?.Discount,
        logo: item.fields?.logo
      })) || [];

  const renderItem = ({ item }: { item: Vendor }) => (
    <View style={styles.card}>
      <Image style={styles.imagePlaceholder} url={item?.logo?.Url} />
      <View style={styles.textContainer}>
        <Text style={[styles.vendorName, Font.medium]}>{item.name}</Text>
        <Text style={[styles.category, Font.regular]}>{item.category}</Text>
        <View style={styles.ratingContainer}>
          <StarFull width={16} height={16} fill="#FFCC00" />
          <Text style={[styles.rating, Font.regular]}>
            {item.rating}{' '}
            <Text style={[styles.discount, Font.regular]}>
              {i18n.t('discount')} {item.discount}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={[styles.header, Font.semiBold]}>{i18n.t('featured')}</Text>
      <FlatList
        data={vendors}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      />
      <FlatList
        data={otherVendors}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -10,
    gap: 10,
    backgroundColor: Colors.BG_WHITE
  },
  header: {
    fontSize: 18,
    marginLeft: 20,
    marginVertical: 10,
    color: Colors.BLACK
  },
  scrollContainer: {},
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    width: vw(75),
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    padding: 10,
    marginRight: 15
  },
  imagePlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: alpha(Colors.JOOD_BLUE, 0.1),
    marginRight: 10,
    borderRadius: 10
  },
  textContainer: {
    flex: 1
  },
  vendorName: {
    fontSize: 16,
    color: Colors.BLACK
  },
  category: {
    fontSize: 14,
    color: alpha(Colors.DARK_GRAY, 0.8),
    marginVertical: 4
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rating: {
    fontSize: 14,
    color: alpha(Colors.DARK_GRAY, 0.8),
    marginLeft: 5
  },
  discount: {
    color: Colors.BLACK
  }
});

export default FeaturedVendors;
