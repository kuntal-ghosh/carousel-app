import { CarouselItem } from '@/types';
import type { NextApiRequest, NextApiResponse } from 'next';


// Generate 20 dummy data
const dummyData: CarouselItem[] = [];

for (let i = 0; i < 20; i++) {
    const item: CarouselItem = {
        id: `item-${i}`,
        image: `https://via.placeholder.com/400x300`,
        title: `Title ${i}`,
        subTitle: `Subtitle ${i}`,
        badge: `Badge ${i}`,
        chips: [`Chip ${i}`,`Chip ${i+1}`,`Chip ${i+2}`,`Chip ${i+3}`,`Chip ${i+4}`, `Chip ${i+5}`],
    };

    dummyData.push(item);
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(dummyData);
}
