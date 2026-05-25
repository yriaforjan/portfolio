import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

interface HeroContextValue {
  ready: boolean;
  setReady: () => void;
}

const HeroContext = createContext<HeroContextValue>({
  ready: false,
  setReady: () => {},
});

export function HeroProvider({ children }: { children: ReactNode }) {
  const [ready, setReadyState] = useState(false);

  const setReady = () => setReadyState(true);

  useEffect(() => {
    if (!ready) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [ready]);

  return (
    <HeroContext.Provider value={{ ready, setReady }}>
      {children}
    </HeroContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useHero = () => useContext(HeroContext);
