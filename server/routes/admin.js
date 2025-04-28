// server/routes/admin.js
router.get('/users', authenticateAdmin, async (req, res) => {
    const users = await User.find();
    res.json(users);
  });
  
  router.delete('/users/:id', authenticateAdmin, async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).send();
  });