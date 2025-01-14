import customCreateApi from 'services/customCreateApi';

const offersApi = customCreateApi
  .enhanceEndpoints({ addTagTypes: ['Offers'] })
  .injectEndpoints({
    endpoints: (builder) => ({})
  });

export const {} = offersApi;
