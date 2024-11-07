'use client'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

function createTypedInstance(el: HTMLElement) {
  return new Typed(el, {
    stringsElement: '#bios',
    typeSpeed: 40,
    backSpeed: 10,
    loop: true,
    backDelay: 1000,
  })
}

export function TypedIntroduceWrapper() {
  const typedRef = useRef(null)

  useEffect(() => {
    const options = {
      strings: [
        'Ehilà, benvenuto nel mio blog!',
        `Sono appassionato di minecraft, elettronica e programmazione`,
        'Voglio condividere con tutti le mie conoscenze apprese nel corso del tempo',
        'Se ti interessa saperne di più unisciti al mio discord!',
      ],
      typeSpeed: 40,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    }

    const typed = new Typed(typedRef.current, options)

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div className="min-h-42 py-4">
      <span className="text-xl leading-7 text-gray-500 dark:text-gray-300" ref={typedRef}></span>
    </div>
  )
}
