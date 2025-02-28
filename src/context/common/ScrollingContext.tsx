"use client"
import { createContext, useEffect, useState } from "react";



interface IScrollingContext {
    isScrolling: boolean;
    scrollTop: number;
}

const DEFAULT_SCROLLING_CONTEXT: IScrollingContext = {
    isScrolling: false,
    scrollTop: 0,
};

const ScrollingContext = createContext<IScrollingContext>(DEFAULT_SCROLLING_CONTEXT);

const ScrollingContextProvider = ({ children }: any) => {
    const [isScrolling, setIsScrolling] = useState(DEFAULT_SCROLLING_CONTEXT.isScrolling);
    const [scrollTop, setScrollTop] = useState(DEFAULT_SCROLLING_CONTEXT.scrollTop);

    const handleScroll = () => {
        setIsScrolling(true);
        setScrollTop(window.scrollY);
    };

    useEffect(() => {
        if (!window){
            return
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <ScrollingContext.Provider value={{ isScrolling, scrollTop }}>
            {children}
        </ScrollingContext.Provider>
        
    );
};

export { ScrollingContext, ScrollingContextProvider };