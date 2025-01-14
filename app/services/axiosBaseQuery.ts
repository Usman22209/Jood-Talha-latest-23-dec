import Toast from 'react-native-toast-message';
import { BaseQueryFn } from '@reduxjs/toolkit/query';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { clearAuth } from 'store/reducers/auth-persist.reducer';
import axiosInstance from './axiosInstance';
import customCreateApi from './customCreateApi';

const BASE_CLIENT_URL = 'https://graph.microsoft.com/v1.0/sites/devqforgqa0.sharepoint.com,b7eb27ad-5b3f-4480-8b92-c3ce4249b29a,c42e0a33-7a0a-4900-82ad-2f1f97896448/lists';

interface AxiosBaseQueryParams {
  url?: string;
  fullURL?: string;
  method: AxiosRequestConfig['method'];
  data?: Record<string, any>;
  params?: Record<string, any>;
  headers?: Record<string, string>;
  noAuth?: boolean;
}

interface RootState {
  authPersist: {
    token: string | null;
  };
}

/**
 * Axios base query function for making HTTP requests.
 * @param {string} baseUrl - Optional base URL for the request.
 * @param {string} url - Endpoint URL for the request.
 * @param {string} fullURL - Endpoint URL for the request (for external API URLs).
 * @param {string} method - HTTP method (e.g., 'GET', 'POST').
 * @param {Object} data - Request payload data.
 * @param {Object} params - URL parameters.
 * @param {Object} headers - Custom headers for the request.
 * @param {boolean} noAuth - Indicates whether the request requires authentication. Default is false.
 */
const axiosBaseQuery: BaseQueryFn<
  AxiosBaseQueryParams,
  unknown,
  { status: number; data: any }
> = async (
  { url, fullURL, method, data, params, headers, noAuth = false }: AxiosBaseQueryParams,
  { getState, dispatch }
) => {
  try {
    // Access the token from the Redux state
    const state = getState() as RootState; // Type state correctly
    // const token = state.authPersist.token;
    const token = "eyJ0eXAiOiJKV1QiLCJub25jZSI6InhJbmNRVFdfX1Q1LUtkVjByVU9NV0RDYklGaHA0eVdDWnFmT0FjSWY0Q1kiLCJhbGciOiJSUzI1NiIsIng1dCI6InoxcnNZSEhKOS04bWdndDRIc1p1OEJLa0JQdyIsImtpZCI6InoxcnNZSEhKOS04bWdndDRIc1p1OEJLa0JQdyJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9iMjQ0OTRlMy1kMWQ2LTQ4ODgtYjdhZi1jYjlmMGYxZTAwNDgvIiwiaWF0IjoxNzM0OTYwMjYzLCJuYmYiOjE3MzQ5NjAyNjMsImV4cCI6MTczNDk2NTEzMywiYWNjdCI6MCwiYWNyIjoiMSIsImFjcnMiOlsiYzEiLCJjMiJdLCJhaW8iOiJBVFFBeS84WUFBQUFDOWcyelVFSU5rUW5zY0VGRnc2Uk1RM0tNcklsZG1EWC80TE1IZjQxL2xlVXR6WnlQTUxXK3g4NXErQzZ6WW9yIiwiYW1yIjpbInB3ZCJdLCJhcHBfZGlzcGxheW5hbWUiOiJKb29kLU1haW4tYXBwIiwiYXBwaWQiOiJmOGI3OWYxZi03ZjNlLTRkMDYtYTc3MC05NmVkYWRiNTZmNjkiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkVtcGxveWVlIDkiLCJnaXZlbl9uYW1lIjoiVCIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjI0MDc6YWE4MDoxMTY6OTY1YTpjMWEwOjRhMWE6NGEyOjNjOWQiLCJuYW1lIjoiVCBFbXBsb3llZSA5Iiwib2lkIjoiMDhlNzViMDAtNDA4Mi00NTQ3LTk0OTktZTI2YmQ0ZDNhY2E0Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTczMDE5Mzc3Mi0xMjMyNDY2Njc5LTM3MDIzMDIyMDItMzI5MDIiLCJwbGF0ZiI6IjIiLCJwdWlkIjoiMTAwMzIwMDMxOUY5OTM1OSIsInJoIjoiMS5BVndBNDVSRXN0YlJpRWkzcjh1ZkR4NEFTQU1BQUFBQUFBQUF3QUFBQUFBQUFBRG5BR2RjQUEuIiwic2NwIjoiU2l0ZXMuUmVhZFdyaXRlLkFsbCBVc2VyLlJlYWQgcHJvZmlsZSBvcGVuaWQgZW1haWwiLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJlLVdxeWI2OXNsNHNOTVZ6Z0Vyb2ttYUVCeGhMd3ljNjBZa0dVVnBER0kwIiwidGVuYW50X3JlZ2lvbl9zY29wZSI6IkVVIiwidGlkIjoiYjI0NDk0ZTMtZDFkNi00ODg4LWI3YWYtY2I5ZjBmMWUwMDQ4IiwidW5pcXVlX25hbWUiOiJ0ZW1wbG95ZWU5QGRldi5xZi5vcmcucWEiLCJ1cG4iOiJ0ZW1wbG95ZWU5QGRldi5xZi5vcmcucWEiLCJ1dGkiOiI0cWF5N1VubTdFcU9TZE84MVB4b0FRIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX2lkcmVsIjoiMTggMSIsInhtc19zdCI6eyJzdWIiOiJGSHotNW51bmEzTFZqcXRYdEw3T2RDcEpIM1FUN0tYUjdyYjNiTE96UERRIn0sInhtc190Y2R0IjoxNTg3OTg3MDUwfQ.GINTIRZR5W73iDGOrXivVbVWtIWLvX0chAhwByUWH_Sfn2CJM6ZVV43YWiA6JdCg7ww7fkWmmnaIUxX8-vdBie8oiG6L6coNl9igEhDbD07XXMl5XdDzu4FK5mpagYtrxrH07IbCw8CE-_uH2RODT-k7vvtVCUs87KYEkyL9JsQ1d0i4ctYXo3MwWPMpc33ycW4P8UntoFMBE3fb94PWAzEEjT5Qqy6ADZgqC2vJXfSLSAp0kp-Vz7etHoBOsvxQvARtAEQMgMPqEVixrbskmSpSjj1J7PzVMjIQu0Ti4Avq6gHIuibauyHbeBaEaLQnbK4xvPHmaMc9ZY1lvR9RTw"
    console.log('token ',token)

    // TODO: If no token for noAuth APIs, go to login page
    const result: AxiosResponse = await axiosInstance({
      url: fullURL ? fullURL : BASE_CLIENT_URL + url,
      method,
      data,
      params,
      headers: noAuth ? headers : { Authorization: `Bearer ${token}`,Prefer:"HonorNonIndexedQueriesWarningMayFailRandomly", ...headers }
    });

    // Return the result
    return { data: result };
  } catch (error: any) {
    // Function to handle authentication-related errors
    const handleAuthError = async (toastMessage: string) => {
      await dispatch(clearAuth());
      await dispatch(customCreateApi.util.resetApiState());
      Toast.show({ type: 'error', text2: toastMessage, visibilityTime: 6000 });
    };

    // Handle token expiration or account disablement
    if (error.response?.data?.message?.tokenExpired) {
      await handleAuthError('Your session has expired. Please log in.');
    }

    if (error.response?.data?.message?.accountDisabled) {
      await handleAuthError('Your account has been disabled. Contact Admin.');
    }

    // Return error response
    return {
      error: {
        status: error.response?.status,
        data: error.response?.data || error.message
      }
    };
  }
};

export default axiosBaseQuery;
