import Head from 'next/head';
import CarouselWrapper from '../components/Carousel/Carousel';
import { CarouselProvider } from '@/contexts/CarouselContext';


 const HomePage = async () =>{

  /* TODO: Need to remove this fetch call and use the context instead

  const data = await fetch('http://localhost:3000/api/carousel');
  const jsonData = await data.json();
  -------------------------------------------------------------------------------------------------------

  _Note: We could have use both the server side rendering and the client side rendering togather but for the sake of requieremnt of the project,
  we are using only client side rendering. We could have pass the initialData to the useSWR hook as a fallbackData but we are not doing that here.

  -------------------------------------------------------------------------------------------------------
    const { data, error } = useSWR<CarouselItem[]>('/api/carousel', fetcher, {
    fallbackData: initialData, 
    revalidateOnFocus: true
  });

    */

  return (
    <div>
    <Head>
      {/* TODO: Need to get static text from constant file */}
      <title>Carousel Example</title>
      <meta name="description" content="A simple carousel example using Next.js, TypeScript, Tailwind CSS, and Mantine." />
    </Head>
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* TODO: Need to get static text from constant file */}
      <h1 className="text-3xl font-bold mb-4">Welcome to the Carousel Example</h1>
      <CarouselProvider>
      <CarouselWrapper />
    </CarouselProvider>
    </main>
    </div>

  );
}

export default HomePage;
