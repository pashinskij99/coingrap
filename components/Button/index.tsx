import { FC } from 'react'
import cn from 'classnames'

interface IProps {
  className?: string
}

const Button: FC<IProps> = ({ children, className }) => {
  return (
    <button
      className={cn(
        'px-1 py-[2px] sm:py-[4px] min-w-[74px] sm:min-w-[102px] flex justify-center items-center border border-iris rounded-md group hover:shadow-md transition duration-200',
        {
          [className]: className,
        },
      )}>
      {children}
    </button>
  )
}

export default Button
