import dayjs from 'dayjs';
import { filter, lowerCase } from 'lodash';
import { useMemo } from 'react';
import { mockItemsAPI } from 'data/OfferList.data';

export const OfferFetchKeys = {
  RECENTLY_ADDED: 'RECENTLY_ADDED',
  MOST_VISITED: 'MOST_VISITED',
  OFFER_GROUP: 'OFFER_GROUP',
  L1_CATEGORY: 'L1_CATEGORY',
  L2_CATEGORY: 'L2_CATEGORY'
};

export const useGetOffers = (fetchKey: any) => {
  const allOffers = useMemo(() => mockItemsAPI?.value, []);

  const getOffers = (searchKey?: any) => {
    // From Home Page - Recently Added
    if (fetchKey === OfferFetchKeys.RECENTLY_ADDED) {
      const recentCountTillToday = dayjs().subtract(1, 'month');
      return filter(allOffers, (item) =>
        dayjs(item.Created).isAfter(recentCountTillToday)
      );
    }

    // From Home Page - Most Visited
    if (fetchKey === OfferFetchKeys.MOST_VISITED) {
      return filter(allOffers, (item) => {
        const count = item.ViewCount || 0;
        return count >= 500;
      });
    }

    // Offers Listed in Home Page
    if (fetchKey === OfferFetchKeys.OFFER_GROUP)
      return filter(
        allOffers,
        (item) => lowerCase(item?.Offer_x0020_Title) === lowerCase(searchKey)
      );

    if (fetchKey === OfferFetchKeys.L1_CATEGORY) {
      return filter(allOffers, (item) => item?.L1Category?.Id === searchKey);
    }

    if (fetchKey === OfferFetchKeys.L2_CATEGORY) {
      return filter(allOffers, (item) => item?.L2Categories?.Id === searchKey);
    }

    return [];
  };

  return getOffers;
};
