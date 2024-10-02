import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppLayout from './components/AppLayout'

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
            <AppLayout />
    </QueryClientProvider>
  )
}

export default App
