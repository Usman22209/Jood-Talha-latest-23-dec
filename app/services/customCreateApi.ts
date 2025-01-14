import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

const customCreateApi = createApi({
  baseQuery: axiosBaseQuery,
  endpoints: () => ({})
});

export default customCreateApi;
