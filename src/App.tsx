import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppLayout from './components/AppLayout'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import Dashboard from './page/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import GoogleBooksDetails from './page/GoogleBooksDetails';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="google-books-details" element={<GoogleBooksDetails />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
