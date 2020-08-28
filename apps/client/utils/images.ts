const images = ['iss', 'moon', 'space'];
export const getBgImg = (id: string) =>
  `url('/assets/images/${images[Number(id) % images.length]}.jpg')`;
