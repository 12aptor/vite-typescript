import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { MainLayout } from './components/layouts/MainLayout';
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
