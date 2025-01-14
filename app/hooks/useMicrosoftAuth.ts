// import * as React from 'react';
// import * as WebBrowser from 'expo-web-browser';
// import { makeRedirectUri, useAuthRequest, useAutoDiscovery } from 'expo-auth-session';
// import CryptoJS from 'crypto-js';
// import { randomBytes } from 'react-native-randombytes';
// import {useDispatch} from 'react-redux';
// import {setToken} from 'store/reducers/auth-persist.reducer';

// WebBrowser.maybeCompleteAuthSession();

// interface AuthConfig {
//   clientId: string;
//   tenantId: string;
//   redirectUri: string;
// }

// const config: { [key: string]: AuthConfig } = {
//   prod: {
//     clientId: '35874b26-3071-4125-b0ca-3f3cb3af6ac5',
//     tenantId: '52b611ba-c9fe-4b73-a1d0-1fea28d86ed8',
//     redirectUri: 'msauth.com.jood://auth'
//   },
//   dev: {
//     clientId: 'f8b79f1f-7f3e-4d06-a770-96edadb56f69',
//     tenantId: 'b24494e3-d1d6-4888-b7af-cb9f0f1e0048',
//     redirectUri: 'msauth.com.jood://auth'
//   }
// };

// const environment = config.dev;

// interface MicrosoftAuth {
//   isDisabled: boolean;
//   onAuth: () => Promise<{ success: boolean; message: string }>;
//   onLogout: () => Promise<any>;
// }

// interface UseMicrosoftAuthReturn {
//   microsoft: MicrosoftAuth;
// }

// export default function useMicrosoftAuth(): UseMicrosoftAuthReturn {
//   const [codeVerifier, setCodeVerifier] = React.useState<string | null>(null);
//   const dispatch = useDispatch()
 
//   const generateCodeChallenge = async (verifier: string): Promise<string> => {
//     try {
//       const hash = CryptoJS.SHA256(verifier);
//       const base64 = hash
//         .toString(CryptoJS.enc.Base64)
//         .replace(/\+/g, '-')
//         .replace(/\//g, '_')
//         .replace(/=+$/, '');

//       return base64;
//     } catch (error) {
//       console.error('Error generating code challenge:', error);
//       throw error;
//     }
//   };

//   const generateCodeVerifier = (): string => {
//     const randomValues = randomBytes(32);
//     const verifier = randomValues.toString('hex');
//     return verifier;
//   };

//   const intialFunction = async () => {
//     try {
//       const verifier = generateCodeVerifier();
//       const challenge = await generateCodeChallenge(verifier);
//       setCodeVerifier(challenge);
//     } catch (error) {
//       console.error('Error in intialFunction:', error);
//     }
//   };

//   React.useEffect(() => {
//     intialFunction();
//   }, []);

//   const discovery = useAutoDiscovery(
//     `https://login.microsoftonline.com/${environment.tenantId}/v2.0`
//   );

//   const [microsoftRequest, microsoftResponse, microsoftPromptAsync] = useAuthRequest(
//     {
//       clientId: environment.clientId,
//       responseType: 'code',
//       scopes: ['openid', 'profile', 'email', 'offline_access','https://graph.microsoft.com/.default'],
//       redirectUri: makeRedirectUri({ native: environment.redirectUri }),
//       usePKCE: false,
//       code_challenge: codeVerifier
//     },
//     discovery
//   );

//   React.useEffect(() => {
//     if (microsoftResponse?.type === 'success') {
//       const { code } = microsoftResponse.params;
//       if (code === 'success') {
//         fetchAccessToken(code);
//       }
//     }
//   }, [microsoftResponse]);

//   const fetchAccessToken = async (code: string) => {
//     try {
//       const response = await fetch(
//         `https://login.microsoftonline.com/${environment.tenantId}/oauth2/v2.0/token`,
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//           },
//           body: new URLSearchParams({
//             client_id: environment.clientId,
//             code,
//             redirect_uri: makeRedirectUri({ native: environment.redirectUri }),
//             grant_type: 'authorization_code'
//           }).toString()
//         }
//       );

//       const data = await response.json();
//       if (response.ok) {
//         dispatch(setToken(data?.access_token))
//         console.log('data?.access_token ',data?.access_token)
//       } else {
//         console.error('Token fetch failed:', data);
//       }
//     } catch (error) {
//       console.error('Error fetching access token:', error);
//     }
//   };

//   const handleAuth = async () => {
//     try {
//       const result = await microsoftPromptAsync();
//       if (result?.type === 'success') {
//         const { code } = result.params;
//         if (code && codeVerifier) {
//           await fetchAccessToken(code);
//         }
//         return {
//           success: true,
//           message: 'Authentication successful!'
//         };
//       } else {
//         return {
//           success: false,
//           message: 'Authentication failed. Please try again.'
//         };
//       }
//     } catch (error) {
//       console.error('Microsoft Auth Error:', error);
//       return {
//         success: false,
//         message: 'Authentication failed. Please try again.'
//       };
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       const logoutUrl = `https://login.microsoftonline.com/${environment.tenantId}/oauth2/v2.0/logout?post_logout_redirect_uri=${encodeURIComponent(
//         makeRedirectUri({ native: environment.redirectUri })
//       )}&prompt=select_account`;
//       await WebBrowser.openBrowserAsync(logoutUrl);
//       setCodeVerifier(null);
//       console.log('User logged out successfully.');
//     } catch (error) {
//       console.error('Error during logout:', error);
//     }
//   };

//   return {
//     microsoft: {
//       isDisabled: !microsoftRequest,
//       onAuth: handleAuth,
//       onLogout: handleLogout,
//     }
//   };
// }
