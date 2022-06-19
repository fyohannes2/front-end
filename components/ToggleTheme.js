//access theme context with React hook.
import { useContext } from "react";
import { ThemeContext } from "../context/theme";
import Head from "next/head"; //component that imports css link into Head from next.js.
//add functionality to ToggleTheme...
//no need to import React, Next.js does by default.
const ToggleTheme = () => {
  const [theme, setTheme] = useContext(ThemeContext); //global context state initialized.
  
//wrap elements with React fragments.  
//seperate css files needed for light and dark themes.
//conditional (ternary) operator: if expression's condition to execute is equal truthy then show ?(), ( : ), if the condition is falsy then  show ().
    return (
    <>
    <Head>
        <link rel= "stylesheet" href= {`/css/${theme}.css`} /> 
    </Head>
        {theme === "light" ? (
          <span 
            onClick={() => {
                setTheme("dark");
                localStorage.setItem("theme", "dark");
            }}    
          style= {{ fontSize: "24px" }}
          >
            🌗
          </span> 
        ) : (
            <span
            onClick={() => {
                setTheme("light");
                localStorage.setItem("theme", "light");
            }}
          style={{ fontSize: "24px" }}
          >
          🌞
          </span>
        )}     
    </>    
  );

};

export default ToggleTheme;