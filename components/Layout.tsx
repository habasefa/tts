import React from 'react'
import Footer from './Common/Footer'
import Header from './Common/Header'

function Layout({ children }: any) {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}

export default Layout
