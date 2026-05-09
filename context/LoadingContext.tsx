"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

const MIN_LOADING_TIME = 2500; // 2.5 seconds minimum to allow animations to "finish well"

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const loadingStartTime = useRef<number | null>(null);
  const pathname = usePathname();

  const startLoading = () => {
    loadingStartTime.current = Date.now();
    setIsLoading(true);
  };

  const stopLoading = () => {
    if (!loadingStartTime.current) {
      setIsLoading(false);
      return;
    }

    const elapsedTime = Date.now() - loadingStartTime.current;
    const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsedTime);

    setTimeout(() => {
      setIsLoading(false);
      loadingStartTime.current = null;
    }, remainingTime);
  };

  // Enhanced setIsLoading that respects minimum time
  const setContextLoading = (loading: boolean) => {
    if (loading) startLoading();
    else stopLoading();
  };

  // Auto-stop loading when pathname changes, but respect minimum time
  useEffect(() => {
    if (isLoading) {
      stopLoading();
    }
  }, [pathname]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading: setContextLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}
