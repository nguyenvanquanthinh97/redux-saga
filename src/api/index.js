const AcessKey = process.env.REACT_APP_ACCESS_KEY;
const URL = `https://api.unsplash.com/photos/`;

const fetchImages = async (page) => {
  const response = await fetch(`${URL}/${AcessKey}&page=${page}&per_page=5`);
  const data = await response.json();

  if (response.status >= 400) {
    const error = new Error(data.errors);
    error.statusCode = response.status;
    throw error;
  }
  return data;
};

const fetchImageStats = async (id) => {
  const response = await fetch(`${URL}/${id}/statistics${AcessKey}`);
  const data = await response.json();

  if (response.status >= 400) {
    const error = new Error(data.errors);
    error.statusCode = response.status;
    throw error;
  }
  return data;
};

export { fetchImages, fetchImageStats };