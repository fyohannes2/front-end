//import context
import { ThemeProvider } from "../context/theme";
import { AuthProvider } from "../context/auth";
//import from node_modules "ant design"
    // path =  "../../"
//import "antd/dist/antd.css";
//import "antd/dist/antd.dark.css";
//import app from 'next/app'

import TopNav from "../components/TopNav";
import "../public/css/styles.css";
import { Toaster } from "react-hot-toast";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <TopNav />
        <Toaster />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;

