const onFinish = async () => {
  try {
    await UserService.createUser(userNameRegister, userPasswordRegister);
    handleSucessfulRegistration();
  } catch (error) {
    console.error("Registration failed", error);
  }
};
