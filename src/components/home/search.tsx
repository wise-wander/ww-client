'use client';

import { ChangeEvent, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { categoryItems, ICategoryItem } from './category-item';

export default function Search() {
  const [searchInput, setSearchInput] = useState<string>('');
  const [selected, setSelected] = useState<ICategoryItem>(categoryItems[0]);

  function handleSelectChange(value: string) {
    const item = categoryItems.find((item) => item.value === value);
    if (item) {
      setSelected(item);
    }
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value);
  }

  return (
    <div className='flex flex-col items-center'>
      <h1 className='mt-12 text-center text-5xl/relaxed font-extrabold'>
        {selected.title}
      </h1>
      <div className='mt-12 flex flex-row items-center gap-4'>
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
                  <item.icon />
                  <span>{item.label}</span>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input
          type='text'
          value={searchInput}
          className='h-12 w-2xl'
          aria-label={selected.label}
          onChange={handleInputChange}
          placeholder={selected.placeholder}
        />
        <Button type='button' className='h-12'>
          Search
        </Button>
      </div>
    </div>
  );
}
