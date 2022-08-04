export const goToLogin = (navigate) => {
  navigate("/");
};

export const goToAdress = (navigate) => {
  navigate("/adress");
};

export const goToCart = (navigate) => {
  navigate("/cart");
};
export const goToSearch = (navigate) => {
  navigate("/search");
};
export const goToDetailRestaurant = (navigate, id) => {
  navigate(`/detail/restaurant/${id}`);
};
export const goToEditProfile = (navigate) => {
  navigate("/editProfile");
};
export const goToSignUp = (navigate) => {
  navigate("/signUp");
};

export const goToFeedPage = (navigate) => {
  navigate("/feedPage");
};
export const goToProfilePage = (navigate) => {
  navigate("/profilePage");
};

export const goBack = (navigate) => {
  navigate(-1);
};

export const goUpdateProfile = (navigate) => {
  navigate("/update");
};

export const goUpdateAdress = (navigate) => {
  navigate("/UpdateAdress");
};
