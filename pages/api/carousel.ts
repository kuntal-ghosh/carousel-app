import type { NextApiRequest, NextApiResponse } from 'next';

const carouselItems = [
  {
    id: '1',
    imageUrl: 'https://via.placeholder.com/400x300',
    title: 'First Slide',
    description: 'This is the first slide description.',
  },
  {
    id: '2',
    imageUrl: 'https://via.placeholder.com/400x300',
    title: 'Second Slide',
    description: 'This is the second slide description.',
  },
  {
    id: '3',
    imageUrl: 'https://via.placeholder.com/400x300',
    title: 'Third Slide',
    description: 'This is the third slide description.',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(carouselItems);
}
