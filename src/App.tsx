import { Outlet } from 'react-router';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import { ErrorBoundary, ErrorFallback } from './components/ErrorBoundary';
import Breadcrumbs from './components/Breadcrumbs';

function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1 overflow-hidden py-6">
        <div className="container">
          <Breadcrumbs />
          <ErrorBoundary fallback={ErrorFallback}>
            <Outlet />
          </ErrorBoundary>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App;
