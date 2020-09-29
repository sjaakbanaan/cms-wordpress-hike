import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import '../styles/index.css'
import '../styles/nprogress.css'

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}
export default MyApp;
