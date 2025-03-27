import ISearchType from '@/types/search-type';
import { BedDouble, Camera, House, Utensils } from 'lucide-react';

const searchTypeItems: ISearchType[] = [
  {
    title: 'Where to?',
    value: 'search-all',
    icon: House,
    label: 'Search All',
    placeholder: 'Places to go, things to do, hotels...',
  },
  {
    title: 'Stay somewhere great',
    value: 'hotels',
    icon: BedDouble,
    label: 'Hotels',
    placeholder: 'Hotel name or destination',
  },
  {
    title: 'Do something fun',
    value: 'things-to-do',
    icon: Camera,
    label: 'Things to Do',
    placeholder: 'Attraction, activity or destination',
  },
  {
    title: 'Find places to eat',
    value: 'restaurants',
    icon: Utensils,
    label: 'Restaurants',
    placeholder: 'Restaurant or destination',
  },
];

export default searchTypeItems;
