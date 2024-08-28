import { useMediaQuery } from '@mantine/hooks';
import Head from 'next/head';
// import { use, useEffect, useState } from 'react';
import useSWR from 'swr';
import Demo from '../components/Carousel/Carousel';

interface CarouselItem {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
}

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

export default function HomePage() {
  // const [items, setItems] = useState<CarouselItem[]>([]);
  // const isMobile = useMediaQuery('(max-width: 768px)');

  // const { data, error } = useSWR<CarouselItem[]>('/api/carousel', fetcher);

  // useEffect(() => {
  //   if (data) {
  //     setItems(data);
  //   }
  // }, [data]);

  // if (error) return <div>Failed to load</div>;
  // if (!data) return <div>Loading...</div>;
  return (
    <div>
    <Head>
      <title>Carousel Example</title>
      <meta name="description" content="A simple carousel example using Next.js, TypeScript, Tailwind CSS, and Mantine." />
    </Head>
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Carousel Example</h1>
      <Demo />
    </main>
    </div>

  );
}
