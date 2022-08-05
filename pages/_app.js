import '../styles/globals.css';
import { MenuOpenContextProvider } from '../store/menu-open-context';
import ViewportHeight from '../utils/ViewportHeight';

const MyApp = ({ Component, pageProps }) => {
  return (
    <MenuOpenContextProvider>
      <ViewportHeight>
        <Component {...pageProps} />
      </ViewportHeight>
    </MenuOpenContextProvider>
  );
};

export default MyApp;
