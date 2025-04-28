// server/middleware/logger.js
const auditLog = (req, res, next) => {
    const logEntry = {
      action: req.method,
      endpoint: req.path,
      user: req.user?.id,
      timestamp: new Date()
    };
    
    Log.create(logEntry);
    next();
  };