import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Auth0Provider } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';


export default function App({ Component, pageProps }: AppProps) {

  const [origin, setOrigin] = useState('');

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      const protocol = window.location.protocol;
      const host = window.location.host;
      const currentOrigin = `${protocol}//${host}`;
      setOrigin(currentOrigin);
    }
  }, []);


  return <Auth0Provider domain="dev-wy7vwm5m.us.auth0.com"
    clientId="vthgYDkO1j07nv1EFMC1pk0hIpJEdnIm"
    authorizationParams={{
      redirect_uri: origin
    }}>
    <Component {...pageProps} />
  </Auth0Provider>
}
