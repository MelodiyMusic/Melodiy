import { IconProps } from '@melodiy/icons/types';
import { Link } from '@tanstack/react-router';
import { JSXElementConstructor } from 'react';

interface NavItemProps {
  icon: JSXElementConstructor<IconProps>; //What would the type be to achieve this
  label: string;
  href: string;
}

function NavItem({ icon: Icon, label, href }: NavItemProps) {
  return (
    <Link
      draggable={false}
      to={href}
      className="flex items-center self-stretch justify-between text-sm gap-x-2 text-base-accent group hover:text-content"
    >
      <Icon
        width={55}
        height={55}
        className="group-hover:stroke-content h-[50%]"
      />
      <span className="w-full truncate">{label}</span>
    </Link>
  );
}

export default NavItem;
