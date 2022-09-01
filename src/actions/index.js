export const signIn = (user) => {
  return {
    type: "SIGN_IN",
    payload: user,
  };
};

export const signOut = (isSignedIn) => {
  return {
    type: "SIGN_OUT",
  };
};
