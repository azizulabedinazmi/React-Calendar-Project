// src/App.js
import { ThemeProvider } from './contexts/ThemeContext';
import './styles/themes.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        {/* Your components */}
      </div>
    </ThemeProvider>
  );
}
// src/App.js
import { PrivateRoute } from './components';
import { AdminDashboard, Logs, UserManagement } from './pages';

<Route path="/admin" element={<PrivateRoute role="admin" />}>
  <Route index element={<AdminDashboard />} />
  <Route path="users" element={<UserManagement />} />
  <Route path="logs" element={<Logs />} />
</Route>