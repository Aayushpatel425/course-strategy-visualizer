import { BrowserRouter as Router } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import AppRoutes from './routes/AppRoutes'
import './App.css'

export function App() {
  return (
    <UserProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  )
}

export default App
