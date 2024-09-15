import { IconProps } from '../types';
import { twMerge } from 'tailwind-merge';

function RateIcon({ width = 50, height = 50, className }: Partial<IconProps>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    className={twMerge('text-base-accent stroke-current', className)}
    fill="none"
    viewBox="0 0 41 42" >
      <path stroke="stroke-current" stroke-width="2" d="M19.58 11.398c.347-.81 1.493-.81 1.84 0l1.941 4.54a1 1 0 0 0 .83.603l4.917.443c.877.08 1.231 1.17.569 1.75l-3.718 3.249a1 1 0 0 0-.317.975l1.098 4.814c.195.858-.732 1.532-1.488 1.08l-4.24-2.53a1 1 0 0 0-1.025 0l-4.239 2.53c-.755.452-1.683-.222-1.488-1.08l1.098-4.814a1 1 0 0 0-.317-.975l-3.718-3.25c-.662-.579-.308-1.67.569-1.749l4.917-.443a1 1 0 0 0 .83-.603l1.942-4.54Z"></path>
    </svg>
  );
}

export { RateIcon };
