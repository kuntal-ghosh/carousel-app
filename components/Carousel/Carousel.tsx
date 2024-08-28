'use client';

import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Button, Paper, Title, useMantineTheme, Text } from '@mantine/core';
import { useCarouselContext } from '../../contexts/CarouselContext';
import Card from '../Card/Card';



export const CarouselWrapper = () => {

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const { items, isLoading, error, mutate } = useCarouselContext();


  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  const slides = items.map((item) => (
    <Carousel.Slide key={item.id} >
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
    slideSize={{ base: '100%', sm: '50%', md: '25%' }}
      slideGap="xs"
      align="start"
      slidesToScroll={1}
      style={{maxWidth: '1750px',justifyContent: 'center',display: 'flex',margin: '0 auto'}}
     

    >
      {slides}
    </Carousel>
  );
};

export default CarouselWrapper;