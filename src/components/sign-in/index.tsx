'use client';

import { FormEvent } from 'react';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export default function LoginComponent() {
  function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.success('Login successful!');
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='cursor-pointer'>Sign in</Button>
      </DialogTrigger>
      <form onSubmit={handleLogin}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className='text-center'>
              Sign in to unlock the best of WiseWander
            </DialogTitle>
          </DialogHeader>

          <div>
            <div className='flex flex-col gap-4'>
              <div className='grid w-full items-center gap-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  type='text'
                  id='email'
                  placeholder='Enter your email address'
                />
              </div>
              <div className='grid w-full items-center gap-2'>
                <Label htmlFor='password'>Password</Label>
                <Input
                  id='password'
                  type='password'
                  placeholder='Enter your password'
                />
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button type='submit'>Sign in</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
