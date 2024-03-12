export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    description: `Ryan Reynolds`,
    title: `Bought Alpine`,
    image: {
      src: '/static/images/estebanryanrenolds_50.webp',
      width: 600,
      height: 770,
    },
  },
  {
    description: 'ElonMusk',
    title: 'at Austin GP',
    image: {
      src: '/static/images/field-app.webp',
      width: 600,
      height: 554,
    },
  },
  {
    description: `BradPitt`,
    title: 'F1 Movie - Apex',
    image: {
      src: '/static/images/planner-app.webp',
      width: 600,
      height: 717,
    },
  },
  {
    description: `Neymar in`,
    title: 'Red Bull Team',
    image: {
      src: '/static/images/publication-app.webp',
      width: 600,
      height: 717,
    },
  },
];
