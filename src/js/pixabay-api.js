import axios from 'axios';

export function axiosImages(userRequest) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '48923193-3438f3437d6b65fcb88350802',
        q: `${userRequest}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data.hits)
    .catch(error => console.log(error));
}
