import React from 'react'
import {createRoot} from "react-dom/client"
import App from "./App"
import "./App.css"
import { AuthContextProvider } from './context/AuthContext'

const root = createRoot(document.querySelector("#root"))
root.render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
)