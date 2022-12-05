import "./Example.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { ThemeProvider } from "./components/ThemeContext";

const Example = () => {
  
  return (
    <>
      <ThemeProvider>
        <Header />
        <Main />
      </ThemeProvider>
    </>
  );
};

export default Example;
