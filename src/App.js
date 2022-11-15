import Header from "./components/header/header";
import LeftNavigator from "./components/LeftNavigator/LeftNavigator";
import RightNavigator from "./components/rightNavigator/RightNavigator";
import { useEffect, useState } from "react";
import Main from "./components/main/Main";
import { motion } from "framer-motion";
import Logo from "./components/logo/Logo";
import PreLoadingLogo from "./components/preLoadingLogo/PreLoadingLogo";



function App() {


  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };


  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, [])

  
  return (
    <>
    {
        data ? (
          <>
            <Header className="z-50" />
            <main className="main flex mx-auto w-[80%] 2xl:w-[1500px] ">
              <LeftNavigator />
              <Main />
              <RightNavigator />
            </main>
          </>)
          : (
          <div className=" flex items-center justify-center pt-72 sm:pt-96">
            <div className="flex items-center justify-center ">
              <motion.div
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { duration: 1.5, ease: "easeInOut" },
                  fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                }}
              >
                <div className="text-[#808040] text-lg md:text-xl lg:text-xl font-medium cursor-pointer flex items-center justify-center">
                  <PreLoadingLogo className="cursor-pointer" />
                </div>
              </motion.div>
            </div>
          </div>
        )
      }

    </>
  );
}
export default App;
