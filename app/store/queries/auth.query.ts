import customCreateApi from 'services/customCreateApi';

const authApi = customCreateApi
  .enhanceEndpoints({ addTagTypes: ['Auth'] })
  .injectEndpoints({
    endpoints: (builder) => ({})
  });

export const {} = authApi;
