import { Outlet } from 'react-router';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import { AppErrorBoundary } from './components/ErrorBoundary';
import Breadcrumbs from './components/Breadcrumbs';

function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1 overflow-hidden py-4 md:py-6 mb-12">
        <div className="container">
          <Breadcrumbs />
          <AppErrorBoundary>
            <Outlet />
          </AppErrorBoundary>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App;
