import Header from "./components/header/header";
import Contact from "./components/contact/contact";
import LeftNavigator from "./components/LeftNavigator/LeftNavigator";
import Members from "./components/members/members";
import Footer from "./components/footer/footer";
import Feed from "./components/feed/Feed";
import RightNavigator from "./components/rightNavigator/RightNavigator";
import { useEffect } from "react";
import Main from "./components/main/Main";

function App() {
  
  return (
    <>
      <Header className="z-50" />
      <main className="main flex mx-auto w-[80%] 2xl:w-[1500px] ">
        <LeftNavigator />
        <Main />
        <RightNavigator />
      </main>
    </>
  );
}
export default App;
