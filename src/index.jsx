import React from 'react'
import { createRoot } from 'react-dom/client'

const App = () => <div>Helooo</div>
const app = <App />
const here = document.querySelector('#here')

const root = createRoot(here)
root.render(app)
