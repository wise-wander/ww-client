'use client';

import { BedDouble, Camera, House } from 'lucide-react';
import { JSX, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

type ICategoryItem = {
  value: string;
  label: string;
  icon: JSX.Element;
  placeholder: string;
};

const categoryItems: ICategoryItem[] = [
  {
    value: 'search-all',
    icon: <House />,
    label: 'Search All',
    placeholder: 'Places to go, things to do, hotels...',
  },
  {
    value: 'hotels',
    icon: <BedDouble />,
    label: 'Hotels',
    placeholder: 'Hotel name or destination',
  },
  {
    value: 'things-to-do',
    icon: <Camera />,
    label: 'Things to Do',
    placeholder: 'Attraction, activity or destination',
  },
];

export default function Search() {
  const [searchInput, setSearchInput] = useState<string>('');
  const [placeholder, setPlaceholder] = useState<string>(
    categoryItems[0].placeholder,
  );

  function handleSelectChange(value: string) {
    const item = categoryItems.find((item) => item.value === value);
    if (item) {
      setPlaceholder(item.placeholder);
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value);
  }

  return (
    <div className='mt-8 flex flex-row items-center gap-4'>
      <Select
        defaultValue={categoryItems[0].value}
        onValueChange={handleSelectChange}
      >
        <SelectTrigger className='!h-12 w-40'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {categoryItems.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.icon}
                <span>{item.label}</span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input
        type='place'
        className='h-12 w-2xl'
        value={searchInput}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      <Button type='button' className='h-12'>
        Search
      </Button>
    </div>
  );
}
