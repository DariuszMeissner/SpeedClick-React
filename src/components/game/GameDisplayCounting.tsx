import React, { FC, useEffect, useRef, useState } from 'react'
import PAGE_CONFIG from '../../style/page.config'

interface IProps {
  animationClass: string
  timeCountDown: number | null
  hint: string
}

const GameDisplayCounting: FC<IProps> = ({
  animationClass,
  timeCountDown,
  hint
}) => {
  const [activeClass, setActiveClass] = useState<boolean>(false)
  const nodeRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (nodeRef.current) {
      nodeRef.current.classList.add(animationClass)
    }
    setActiveClass(true)
  }, [timeCountDown])

  useEffect(() => {
    setTimeout(() => {
      nodeRef.current?.classList.remove(animationClass)
      setActiveClass(false)
    }, 200)
  }, [activeClass])

  return (
    <div>
      <h2 style={PAGE_CONFIG.heading} ref={nodeRef}>
        {timeCountDown}
      </h2>
      <p style={PAGE_CONFIG.hint}>{hint}</p>
    </div>
  )
}

export default GameDisplayCounting
