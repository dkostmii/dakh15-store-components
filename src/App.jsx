import React from 'react'
import MainPage from './pages/MainPage'
import ButtonsPage from './pages/ButtonsPage'
import IconsPage from './pages/IconsPage'

import './App.scss'

import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([{
    path: 'buttons',
    element: <ButtonsPage />,
}, {
    path: 'icons',
    element: <IconsPage />
}, {
    path: '/',
    element: <MainPage />,
}])

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default App
