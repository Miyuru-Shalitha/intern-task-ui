import { createContext, useEffect, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

// NOTE(Miyuru): These breakpoints are the same as the ones that are in 
//               the device emulation section of chromium based browsers.
export enum Breakpoint {
  MobileSmall = 320,
  MobileMedium = 375,
  MobileLarge = 425,
  Tablet = 768,
  Laptop = 1024,
  LaptopLarge = 1440,
}

// NOTE(Miyuru): I wrapped this into an interface, so that I can put 
//               more attributes if I wanted.
export interface IWindowProp {
  width: number;
}

export interface IWindowContextType {
  windowProps: IWindowProp;
  setWindowProps: Dispatch<SetStateAction<IWindowProp>>;
}

export const WindowContext = createContext<IWindowContextType | undefined>(undefined);

export default function WindowContextProvider({
  children
}: {
  children: ReactNode
}) {
  const [windowProps, setWindowProps] = useState({ width: window.innerWidth });

  useEffect(() => {
    const checkWindowWidth = () => {
      window.addEventListener("resize", () => {
        setWindowProps({ width: window.innerWidth });
      });
    };

    return checkWindowWidth;
  }, []);

  return (
    <WindowContext.Provider value={{ windowProps, setWindowProps }}>
      {children}
    </WindowContext.Provider>
  );
}