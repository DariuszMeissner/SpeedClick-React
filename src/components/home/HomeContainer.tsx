/* eslint-disable no-use-before-define */
import React, { FC, useState, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import PAGE_CONFIG from '../../style/page.config'
import Home from './Home'
import Header from '../header/Header'
import Intro from '../intro/Intro'

const style = {
  wrap: {
    ...PAGE_CONFIG.wrap
  },
  home: {
    textAlign: 'center',
    ...PAGE_CONFIG.component
  },
  intro: {
    backgroundImage:
      'radial-gradient(circle, #123262, #143469, #18366f, #1c3776, #21397c)'
  }
} as const

const DURATION_INTRO = 3000

const HomeContainer: FC = () => {
  const [showIntro, setShowIntro] = useState<boolean>(true)
  const [showContent, setShowContent] = useState<boolean>(false)
  const nodeRef = useRef(null)
  const nodeContentRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      setShowIntro(false)
    }, DURATION_INTRO)
  }, [])

  return (
    <div style={showIntro ? style.intro : style.wrap}>
      <div style={style.home}>
        <CSSTransition
          in={showIntro}
          nodeRef={nodeRef}
          timeout={300}
          classNames="intro"
          unmountOnExit
          onEnter={() => setShowContent(false)}
          onExited={() => setShowContent(true)}>
          <div ref={nodeRef}>
            <Intro />
          </div>
        </CSSTransition>

        <CSSTransition
          in={showContent}
          nodeRef={nodeContentRef}
          timeout={300}
          classNames="intro"
          unmountOnExit>
          {showContent && (
            <div ref={nodeContentRef}>
              <Header />
              <Home />
            </div>
          )}
        </CSSTransition>
      </div>
    </div>
  )
}

export default HomeContainer
