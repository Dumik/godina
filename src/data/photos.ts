// Масив локальних фото для гри
// Для кожного фото: src — шлях до фото, year — рік (перші 4 цифри з назви)

import photo2024_4 from '../assets/photos/2024_4.jpg';
import photo2024_3 from '../assets/photos/2024_3.jpg';
import photo2024_2 from '../assets/photos/2024_2.jpg';
import photo2024_1 from '../assets/photos/2024_1.jpg';
import photo2023_2 from '../assets/photos/2023_2.jpg';
import photo2023_1 from '../assets/photos/2023_1.jpg';
import photo2022_2 from '../assets/photos/2022_2.jpg';
import photo2022_1 from '../assets/photos/2022_1.jpg';
import photo2020_2 from '../assets/photos/2020_2.jpg';
import photo2020_1 from '../assets/photos/2020_1.jpg';
import photo2019_5 from '../assets/photos/2019_5.jpg';
import photo2019_4 from '../assets/photos/2019_4.jpg';
import photo2019_3 from '../assets/photos/2019_3.jpg';
import photo2019_2 from '../assets/photos/2019_2.jpg';
import photo2019_1 from '../assets/photos/2019_1.jpg';
import photo2018_5 from '../assets/photos/2018_5.jpg';
import photo2018_4 from '../assets/photos/2018_4.jpg';
import photo2018_3 from '../assets/photos/2018_3.jpg';
import photo2018_2 from '../assets/photos/2018_2.jpg';
import photo2018_1 from '../assets/photos/2018_1.jpg';
import photo2017_2 from '../assets/photos/2017_2.jpg';
import photo2017_1 from '../assets/photos/2017_1.jpg';
import photo2016_2 from '../assets/photos/2016_2.jpg';
import photo2013_1 from '../assets/photos/2013_1.jpg';
import photo2012_4 from '../assets/photos/2012_4.jpg';
import photo2012_1 from '../assets/photos/2012_1.jpg';
import photo2011_1 from '../assets/photos/2011_1.jpg';

export interface LocalPhoto {
  src: string;
  year: number;
  title?: string;
  region?: string;
}

export const photos: LocalPhoto[] = [
  { src: photo2024_4, year: 2024 },
  { src: photo2024_3, year: 2024 },
  { src: photo2024_2, year: 2024 },
  { src: photo2024_1, year: 2024 },
  { src: photo2023_2, year: 2023 },
  { src: photo2023_1, year: 2023 },
  { src: photo2022_2, year: 2022 },
  { src: photo2022_1, year: 2022 },
  { src: photo2020_2, year: 2020 },
  { src: photo2020_1, year: 2020 },
  { src: photo2019_5, year: 2019 },
  { src: photo2019_4, year: 2019 },
  { src: photo2019_3, year: 2019 },
  { src: photo2019_2, year: 2019 },
  { src: photo2019_1, year: 2019 },
  { src: photo2018_5, year: 2018 },
  { src: photo2018_4, year: 2018 },
  { src: photo2018_3, year: 2018 },
  { src: photo2018_2, year: 2018 },
  { src: photo2018_1, year: 2018 },
  { src: photo2017_2, year: 2017 },
  { src: photo2017_1, year: 2017 },
  { src: photo2016_2, year: 2016 },
  { src: photo2013_1, year: 2013 },
  { src: photo2012_4, year: 2012 },
  { src: photo2012_1, year: 2012 },
  { src: photo2011_1, year: 2011 },
];