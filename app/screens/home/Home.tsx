import React from 'react';
import ScreenWrapper from 'components/common/ScreenWrapper';
import FeaturedVendors from 'components/FeaturedVendors';
import HomeHeader from './HomeHeader';
import HomeBanner from './HomeBanner';
import HomeQuickFilter from './HomeQuickFilter';
import RatingModal from 'components/RatingModal/RatingModal';

const Home: React.FC = () => {
  const [isModalVisible, setModalVisible] = React.useState(true);
  const handleRateSubmit = (rating: number, feedback: string) => {
    console.log('Rating:', rating);
    console.log('Feedback:', feedback);

  };
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  return (
    <ScreenWrapper header={<HomeHeader />}>
      <HomeBanner />
      <HomeQuickFilter />
      <FeaturedVendors />
      <RatingModal visible={isModalVisible} onClose={closeModal} onSubmit={handleRateSubmit} />
    </ScreenWrapper>
  );
};

export default Home;
