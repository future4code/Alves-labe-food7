export const getRestaurants = (bory, clear, navigate) => {
    axios
      .post(`${BASE_URL}/restaurants`, bory)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        clear();
      })
      .catch((error) => {
        alert(error.response.data);
        // alert(error.response.data);
      });
  };
  