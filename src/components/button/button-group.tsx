import React from 'react'
import { ButtonProps } from '.'
import cx from '../../utils/classNames'

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ children, ...props }, ref) => {
    const items = React.useMemo(
      () =>
        React.Children.map(
          children as Array<React.ReactElement<ButtonProps>>,
          (child, index) => {
            return React.cloneElement(child as React.ReactElement, {
              className: cx(
                index === 0
                  ? '!rounded-r-none'
                  : index ===
                    (children as Array<React.ReactElement<ButtonProps>>)
                      .length -
                      1
                    ? '!rounded-l-none'
                    : '!rounded-none',
                (child as React.ReactElement).props.className
              )
            })
          }
        ),
      [children]
    )

    return (
      <div ref={ref} className={cx('inline-flex')} role='group' {...props}>
        {items}
      </div>
    )
  }
)

ButtonGroup.displayName = 'Button.Group'
export default ButtonGroup
