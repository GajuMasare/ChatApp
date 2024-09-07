export const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;
  } catch (error) {}
};

export const login = (req, res) => {
  console.log("loginuser");
};

export const logout = (req, res) => {
  console.log("logoutUser");
};
