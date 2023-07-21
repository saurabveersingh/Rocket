import { useEffect, useRef } from "react"
import "./style.css"

const Launch = () => {
  const jupiter = useRef(null)
  const earth = useRef(null)

  const scrollToTop = () => {
    jupiter.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToBottom = () => {
    earth.current?.scrollIntoView({ behavior: "instant" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [earth])

  useEffect(() => {
    scrollToBottom()
  }, [])

  return (
    <>
      <div ref={jupiter} />
      <div className="stimulator">
        <img src="/images/jupiter.png" className="jupiter" />
        <img src="/images/launch.png" className="launch" onClick={scrollToTop} />
        <img src="/images/rocket.png" className="rocket" />
        <img src="/images/earth.png" className="earth" />
      </div>
      <div ref={earth} />
    </>
  )
}

export default Launch
