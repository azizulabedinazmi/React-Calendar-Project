// src/pages/UserManagement.js
export const UserManagement = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      // Fetch users from API
      fetchUsers().then(data => setUsers(data));
    }, []);
  
    const handleDelete = (userId) => {
      // API call to delete user
    };
  
    return (
      <table>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.email}</td>
            <td>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
              <button onClick={() => handleBan(user.id)}>Ban</button>
            </td>
          </tr>
        ))}
      </table>
    );
  };