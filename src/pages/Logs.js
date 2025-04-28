// src/pages/Logs.js
export const Logs = () => {
    const [logs, setLogs] = useState([]);
  
    useEffect(() => {
      fetchLogs().then(data => setLogs(data));
    }, []);
  
    return (
      <div>
        {logs.map(log => (
          <div key={log.id}>
            [{new Date(log.timestamp).toLocaleString()}] 
            {log.user} - {log.action} {log.endpoint}
          </div>
        ))}
      </div>
    );
  };