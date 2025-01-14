import customCreateApi from 'services/customCreateApi';

const userApi = customCreateApi
  .enhanceEndpoints({ addTagTypes: ['User'] })
  .injectEndpoints({
    endpoints: (builder) => ({
      fetchUserProfile: builder.query<any, void>({
        query: () => ({
          fullURL:
            'https://graph.microsoft.com/v1.0/me?$select=id,companyName,jobTitle,userType,displayName,businessPhones,department,mail,employeeType,officeLocation,userPrincipalName,employeeId',
          method: 'GET',
        }),
      }),
    }),
  });

export const { useFetchUserProfileQuery } = userApi;
