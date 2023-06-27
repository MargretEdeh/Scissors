import * as React from 'react';

export interface IButtonProps {
    onClick?: ()=> void;
    disabled?: boolean;
    className?: string;
    color?: boolean;
    children : React.ReactNode ;


}

export function Button (props: IButtonProps) {
    const {onClick , color, disabled, className ,children} = props;

  return (
    <button 
    className={` rounded-3xl ${className}  px-7 py-3 ${color ? " bg-primary text-white" : "bg-white border border-primary text-primary"}`}
    disabled={disabled}
    >
        {children}
    </button>
  );
}
