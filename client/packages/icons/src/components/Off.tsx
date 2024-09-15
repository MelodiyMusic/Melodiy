import { IconProps } from '../types';
import { twMerge } from 'tailwind-merge';

function OffIcon({ width = 50, height = 50, className }: Partial<IconProps>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    className={twMerge('text-base-accent stroke-current', className)}
    fill="none"
    viewBox="0 0 41 42" >
      <path stroke="stroke-current" stroke-linecap="round" stroke-width="2" d="M26.068 13.594a10.114 10.114 0 0 1 4.678 8.534c0 5.59-4.532 10.122-10.122 10.122s-10.121-4.532-10.121-10.122c0-3.586 1.864-6.736 4.677-8.534"></path><path stroke="stroke-current" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.848 19.37v-8.74"></path>
    </svg>
  );
}

export { OffIcon };
