import { Button, Paper, Title, useMantineTheme, Text, Group, Badge, Chip, rem } from '@mantine/core';
import classes from './Card.module.css';
import { MantineLogo } from '@mantinex/mantine-logo';
import { IconX } from '@tabler/icons-react';

interface CardProps {
    image: string;
    title: string;
    subTitle: string;
    badge: string;
    chips: string[];
  }
  
   const Card= ({ image, title, subTitle,badge ,chips}: CardProps) =>{
    return (
      <Paper
        shadow="md"
        radius="md"
        style={{ backgroundColor: `gray` }}
        className={classes.card}
      >
        <div>
            <img src={image} alt={title} className={classes.img} />
        </div>
        <div className={classes.wrapper}>
            <Group justify="start">
            <MantineLogo type="mark" size="2.5rem" />
            <div>
                <Text size="lg">{title}</Text>
                <Text size="md">{subTitle}</Text>
            </div>
            </Group>
                  <Badge className={classes.badge}>12 days left</Badge>
        </div>
       <div className={classes.chips}>
       {chips?.map((chip) => (
        <Chip key={chip} color="gray" style={{marginRight: rem(5)}}>{chip}</Chip>
       ))}  
       </div>

      </Paper>
    );
  }

  export default Card;
  