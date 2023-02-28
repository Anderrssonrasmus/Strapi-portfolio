import React, { useLayoutEffect } from 'react'
import { gsap } from "gsap"
import { de } from 'date-fns/locale'

export default function GsapTest() {

  useLayoutEffect(() => {
    gsap.fromTo(".box", {
      y: 10,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      delay: 0.75

    })
  })



  return (
    <div className="box" style={style}>
      Hello
    </div>
  )
}

const style = {
  background: "red",
  width: "fit-content"
}