import { cn } from '@/lib/utils';

type Props = React.ComponentProps<'div'> & { children: React.ReactNode };

export default function MaxWidthContainer(props: Props) {
  return (
    <div className={cn('container mx-auto max-w-7xl px-6', props.className)}>
      {props.children}
    </div>
  );
}
