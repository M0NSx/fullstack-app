import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h2>NotFound</h2>
      <p>This page doesn't exist</p>
      <Link href='/'>Return to HomePage</Link>
    </div>
  )
}

export default NotFound
