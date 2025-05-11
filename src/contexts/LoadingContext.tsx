"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import LoadingOverlay from "@/components/ux/rabbit/LoadingOverlay";

interface LoadingContextType {
  startLoading: (content?: string | string[]) => void;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState<string | string[]>("");

  const startLoading = (content?: string | string[]) => {
    setContent(content || "로딩 중...");
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider value={{ startLoading, stopLoading }}>
      {children}
      <LoadingOverlay
        isLoading={isLoading}
        content={content}
        onCancel={stopLoading}
      />
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
