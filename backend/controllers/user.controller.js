import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password"); //find all users except $ne which is self account also without password

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("error in getUserForSidebar", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};
