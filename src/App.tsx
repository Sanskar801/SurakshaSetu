// import React from 'react'
// import Navbar from './components/navigation/Navbar'
// import { Route, Routes } from 'react-router'
// import HomePage from './pages/HomePage'
// import LICPage from './pages/LICPage'
// import PrivateInsurance from './pages/PrivateInsurance'
// import BlogPage from './pages/BlogPage'
// import AdminPage from './pages/AdminPage'

// export default function App() {
//   return (
//     <div className='w-screen h-screen'>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<HomePage />} />
//         <Route path='/admin' element={<AdminPage />} />
//         <Route path='/lic' element={<LICPage />} />
//         <Route path='/private-insurance' element={<PrivateInsurance />} />
//         <Route path='/blog' element={<BlogPage />} />
//         {/* <Route path='/contact' element={<ContactForm />} /> */}
//       </Routes>
//     </div>
//   )
// }

import React from 'react'
import Laoder from './components/Laoder'

export default function App() {
  return (
    <div className='w-screen h-screen'>
      <Laoder />
    </div>
  )
}
