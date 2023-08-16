import cx from '../../utils/classNames'
import React from 'react'
import ButtonGroup from './button-group'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'cta' | 'rent'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

const ButtonComponent = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      children,
      className,
      ...props
    },
    ref: any
  ) => {
    return (
      <button
        ref={ref}
        className={cx(
          'inline-flex items-center justify-center border border-transparent tracking-[0.38px] flex-row rounded-full transition-colors disabled:opacity-40 disabled:pointer-events-none font-poppins',
          size === 'sm' && 'h-8 text-sm px-4',
          size === 'md' && 'h-10 text-[15px] px-6',
          size === 'lg' && 'h-12 text-base px-10',

          variant === 'primary' &&
            'bg-primary-medium font-medium text-white no-underline hover:bg-primary focus:bg-primary focus:text-white active:bg-primary active:text-white',
          variant === 'secondary' &&
            'font-semibold no-underline bg-transparent text-primary-medium hover:underline hover:text-primary-medium',
          variant === 'tertiary' &&
            'bg-transparent font-medium border-primary-medium text-primary-medium no-underline hover:text-white hover:bg-primary-medium focus:bg-primary-medium focus:text-white active:bg-primary-medium active:text-white',
          variant === 'cta' &&
            'font-medium no-underline bg-cta hover:bg-cta-medium focus:bg-cta-medium active:bg-cta-medium text-black',
          variant === 'rent' &&
            'font-medium no-underline bg-purple hover:bg-purple-medium focus:bg-purple-medium active:bg-purple-medium text-white focus:text-white active:text-white',
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        <span className='flex flex-none items-center justify-center flex-row space-x-2'>
          {children}
        </span>
      </button>
    )
  }
)

ButtonComponent.displayName = 'Button'

export const Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup
})
