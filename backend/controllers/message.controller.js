export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id } = req.params;
    const senderId = req.userId;
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
