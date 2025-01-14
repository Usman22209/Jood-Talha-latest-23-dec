import React from 'react';
import { useNavigation } from 'expo-router';
import ScreenWrapper from 'components/common/ScreenWrapper';
import PageHeader from 'components/PageHeader';
import { useFetchUserProfileQuery } from 'store/queries/user.query';
import LogOut from './LogOut';
import ProfileECard from './ProfileECard';
import ProfileInfo from './ProfileInfo';

const Profile: React.FC = () => {
  const navigation = useNavigation();
  const { data: userData } = useFetchUserProfileQuery();

  return (
    <ScreenWrapper
      header={
        <PageHeader
          title="Profile"
          onBackPress={() => {
            navigation.goBack();
          }}
        />
      }
    >
      <ProfileECard userData={userData} />
      <ProfileInfo userData={userData} />
      <LogOut />
    </ScreenWrapper>
  );
};

export default Profile;
