import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import { SidebarProvider } from './contexts/SidebarContext';

function App() {
  return (
    <Router>
      <SidebarProvider>
        <AppRoutes />
      </SidebarProvider>
    </Router>
  );
}

export default App;