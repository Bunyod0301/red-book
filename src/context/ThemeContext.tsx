// "use client"
// import {createContext, useState, useEffect} from "react"
// type MyContextType = {
//   // Define the structure of your context value
//   // For example, you might have a property called "value"
//   value: string;
// };
// export const ThemeContext = createContext();

// export const ThemeProvider = ({children}: any) =>{
//   const [theme, setTheme] = useState("light");
//   const [isMounted, setIsMounted] = useState(false)

//   useEffect(()=>{
//     setIsMounted(true);
//     const storedTheme = localStorage.getItem("theme") || "light";
//     setTheme(storedTheme);
//   }, [])

//   if(!isMounted) {
//     return <>Loading...</>
//   }

//   const changeTheme = (theme: string) =>{
//     setTheme(theme);
//     localStorage.setItem("theme", theme)
//   }

//   return(
//     <ThemeContext.Provider value={{theme, changeTheme}}>
//       {children}
//     </ThemeContext.Provider>
//   )

// }
// "use client"
// import { createContext, useState, useEffect, ReactNode, useContext } from "react";

// type ThemeContextType = {
//   theme: string;
//   changeTheme: (theme: string) => void;
// };

// export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }
//   return context;
// };

// type ThemeProviderProps = {
//   children: ReactNode;
// };

// export const ThemeProvider = ({ children }: ThemeProviderProps) => {
//   const [theme, setTheme] = useState("light");
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//     const storedTheme = localStorage.getItem("theme") || "light";
//     setTheme(storedTheme);
//   }, []);

//   if (!isMounted) {
//     return <>Loading...</>;
//   }

//   const changeTheme = (newTheme: string) => {
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, changeTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
