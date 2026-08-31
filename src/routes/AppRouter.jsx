import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import LandingPage from '../pages/landing/LandingPage'
import LoginPage from '../pages/auth/LoginPage'
import RegisterPage from '../pages/auth/RegisterPage'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
