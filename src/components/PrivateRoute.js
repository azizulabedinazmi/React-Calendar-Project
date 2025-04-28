// src/components/PrivateRoute.js
export const PrivateRoute = ({ role, children }) => {
    const { user } = useAuth(); // Your authentication context
  
    if (!user || user.role !== role) {
      return <Navigate to="/login" />;
    }
  
    return children;
  };