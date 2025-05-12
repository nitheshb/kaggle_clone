import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import { SidebarProvider } from './contexts/SidebarContext';
import ComponentStyling from './components/All competitions/ComponentStyling'
function App() {
  return (
    <Router>
      <SidebarProvider>
        <AppRoutes />
        {/* <ComponentStyling /> */}
      </SidebarProvider>
    </Router>
  );
}


export default App;