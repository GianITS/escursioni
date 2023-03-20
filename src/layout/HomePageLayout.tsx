import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export const HomePageLayout = () => {
  return (
    <div>
        <main>
            <Outlet />
        </main>
    </div>
  )
}
