import { FC } from 'react';
import React from 'react';
import OfferCard from 'components/OfferCard';

interface CategoryOfferListItemProps {
  item: any; 
}

const CategoryOfferListItem: FC<CategoryOfferListItemProps> = ({ item }) => {
  return <OfferCard item={item} />;
};

export default CategoryOfferListItem;
