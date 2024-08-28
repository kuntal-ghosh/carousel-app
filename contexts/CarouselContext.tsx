'use client';

import { CarouselItem } from '@/types';
import React, { createContext, useContext, useMemo, ReactNode } from 'react';
import useSWR from 'swr';

// Define the type for the context state
type CarouselContextType = {
  items: CarouselItem[];
  isLoading: boolean;
  error: any;
  mutate: () => void;
};



// Create the context with a default value
const CarouselContext = createContext<CarouselContextType | undefined>(undefined);

// Define the fetcher function
const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  return response.json();
};

// Create the provider component
const CarouselProvider = ({ children }: { children: ReactNode }) => {
  const { data, error, mutate } = useSWR<CarouselItem[]>('/api/carousel', fetcher);

  // Memoize the context value to avoid unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      items: data || [],
      isLoading: !error && !data,
      error,
      mutate,
    }),
    [data, error, mutate]
  );

  return <CarouselContext.Provider value={contextValue}>{children}</CarouselContext.Provider>;
};

// Create a custom hook to use the context
const useCarouselContext = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarouselContext must be used within a CarouselProvider');
  }
  return context;
};

export { CarouselProvider, useCarouselContext };