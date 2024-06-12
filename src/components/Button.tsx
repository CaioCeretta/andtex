'use client'

import { ButtonHTMLAttributes } from 'react'
import { IconType } from 'react-icons'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  disabled?: boolean
  outline?: boolean
  icon?: IconType
  small?: boolean
  custom?: boolean
  type?: 'submit' | 'reset' | 'button'
  // onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  label,
  icon: Icon,
  outline,
  small,
  custom,
  type,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      {...rest}
      className={`
    disabled:cursor-not-allowed
    rounded-sm
    flex
    font-bold
    border-[#FEC107]
    py-2
    w-full      
    items-center
    justify-center
    gap-2
    border
    transition
    hover:opacity-80
    bg-[#ffebad]
    
    ${outline ? 'bg-white text-slate-700' : 'bg-slate-700 text-white'}
    ${
      small
        ? 'border-[1px] px-2 py-1 text-sm font-light'
        : 'text-md border-2 px-4 py-3 font-semibold'
    }
    ${custom || ''}
    ${disabled}

  `}
    >
      {Icon ? <Icon size={24} /> : ''}

      {label}
    </button>
  )
}

export default Button
