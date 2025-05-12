<<<<<<< HEAD
import './App.css'
import Allcomponents from './components/All competitions/Allcomponents';
import FeaturedPage from './components/Featured/Featured';


function App() {
  return (
   <div className="min-h-screen bg-gray-100 px-6 py-8">

           <Allcomponents />
          {/* <FeaturedPage /> */}
    </div>
=======
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
>>>>>>> eab8407f5a0fe76e3e921401646a164322998cf1
  );
}

export default App;