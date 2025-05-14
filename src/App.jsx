// import { BrowserRouter as Router } from 'react-router-dom';
// import AppRoutes from './routes';
// import { SidebarProvider } from './contexts/SidebarContext';
// import ComponentStyling from './components/All competitions/ComponentStyling'
// function App() {
//   return (
//     <Router>
//       <SidebarProvider>
//         <AppRoutes />
//         {/* <ComponentStyling /> */}
//       </SidebarProvider>
//     </Router>
//   );
// }


// export default App;

// src/routes/index.jsx
// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Datasets from '../pages/Datasets';
// import Learn from '../pages/Learn';
// import NotFound from '../pages/NotFound';

// export default function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/datasets" replace />} />
//       <Route path="/datasets" element={<Datasets />} />
//       <Route path="/learn" element={<Learn />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// }

// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';          // ← points to src/routes/index.jsx
import { SidebarProvider } from './contexts/SidebarContext';

export default function App() {
  return (
    <Router>
      <SidebarProvider>
        <AppRoutes />
      </SidebarProvider>
    </Router>
  );
}

