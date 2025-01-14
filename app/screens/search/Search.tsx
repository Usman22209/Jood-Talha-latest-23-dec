import React from 'react';
import { useSelector } from 'react-redux';
import FeaturedVendors from 'components/FeaturedVendors';
import ScreenWrapper from 'components/common/ScreenWrapper';
import SearchBar from './SearchBar';
import SearchCategoryFilter from './SearchCategoryFilter';
import SearchQuickFilter from './SearchQuickFilter';
import SearchRecentFilter from './SearchRecentFilter';
import SearchPopularFilter from './SearchPopularFilter';

const Search: React.FC = () => {
  const isKeyboardActive = useSelector((state: any) => state.app.keyboardActive);

  return (
    <ScreenWrapper header={<SearchBar />}>
      {isKeyboardActive ? (
        <SearchQuickFilter />
      ) : (
        <>
          {/* What are you looking for today? */}
          <SearchCategoryFilter />

          {/* Recent Searches */}
          <SearchRecentFilter />

          {/* Popular Searches */}
          <SearchPopularFilter />

          {/* Featured Vendors */}
          <FeaturedVendors />
        </>
      )}
    </ScreenWrapper>
  );
};

export default Search;
