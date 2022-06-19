//import context
import { ThemeProvider } from "../context/theme";

import TopNav from "../components/TopNav"
//import from node_modules "ant design"
    // path =  "../../"
//import "antd/dist/antd.css";
//import "antd/dist/antd.dark.css";
//import app from 'next/app'
function MyApp({ Component, pageProps }) {
    return (
      <ThemeProvider>
        <TopNav />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
  
  export default MyApp;