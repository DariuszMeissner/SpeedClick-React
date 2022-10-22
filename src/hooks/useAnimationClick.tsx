/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-plusplus */
import React, { useEffect } from 'react'

const useAnimationClick = (
  element: React.MutableRefObject<HTMLElement | null>,
  points: number
) => {
  function createParticle(x: number, y: number) {
    const particle = document.createElement('particle')

    const size = Math.floor(Math.random() * 20 + 5)
    particle.style.width = `${size}px`
    particle.style.height = `${size}px`
    particle.style.background = `hsl(${Math.random() * 90 + 180}, 70%, 60%)`

    const destinationX = x + (Math.random() - 0.5) * 2 * 150
    const destinationY = y + (Math.random() - 0.5) * 2 * 150

    const animation = particle.animate(
      [
        {
          transform: `translate(${x - size / 2}px, ${y - size / 2}px)`,
          opacity: 1
        },
        {
          transform: `translate(${destinationX}px, ${destinationY}px)`,
          opacity: 0
        }
      ],
      {
        duration: 500 + Math.random() * 1000,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        delay: Math.random() * 200
      }
    )

    document.body.appendChild(particle)

    animation.onfinish = () => {
      particle.remove()
    }
  }

  const onClick = (e: MouseEvent) => {
    for (let i = 0; i < 20; i++) {
      createParticle(e.clientX, e.clientY)
    }
  }

  useEffect(() => {
    const cleanRef = element.current
    if (element.current) {
      element.current.addEventListener('mouseup', onClick)
    }

    return () => {
      cleanRef?.removeEventListener('mouseup', onClick)
    }
  }, [element, points])
}

export default useAnimationClick
