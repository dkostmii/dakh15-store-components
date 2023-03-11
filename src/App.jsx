import React from 'react'
import MainPage from './pages/MainPage'
import ButtonsPage from './pages/ButtonsPage'

import './App.sass'

import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([{
    path: 'buttons',
    element: <ButtonsPage />,
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
