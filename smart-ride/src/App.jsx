// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App




import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import BookRide from './pages/BookRide.jsx'
import MyRides from './pages/MyRides.jsx'
import Driver from './pages/Driver.jsx'


function App() {
return (
<div className="min-h-screen bg-gray-50">
<Navbar />
<div className="p-6">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/book" element={<BookRide />} />
<Route path="/myrides" element={<MyRides />} />
<Route path="/driver" element={<Driver />} />
</Routes>
</div>
</div>
)
}

export default App

