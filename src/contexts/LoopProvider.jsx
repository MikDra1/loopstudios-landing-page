/* eslint-disable react/prop-types */
import useScreenSize from '../hooks/useScreenSize'
import { useContext, useEffect, useState } from "react"
import { createContext } from 'react';



const LoopContext = createContext();

function LoopProvider({ children }) {
    const [isMobile, setIsMobile] = useState(null);
  const screenSize = useScreenSize()

  useEffect(
    function () {
      setIsMobile(screenSize.width <= 1000);
    },
    [screenSize.width]
  );

  return (
    <LoopContext.Provider
      value={{
        isMobile
      }}
    >
      {children}
    </LoopContext.Provider>
  );
}

function useLoop() {
  const context = useContext(LoopContext);
  if (context === undefined)
    throw new Error("bankContext was used outside the EasyBankProvider");
  return context;
}

export { LoopProvider, useLoop };