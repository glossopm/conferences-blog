export const conferences: Conference[] = [
  {
    name: 'Tech Lead Conf 2023',
    imgUrl: 'https://techleadconf.com/img/logo.svg',
  },
  {
    name: 'Node Congress 2023',
    imgUrl: 'https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/f_auto,c_scale,w_180/v1619376938/eav9rff77rtiyz7qse5v.jpg',
  },
];

export interface Conference {
  name: string
  imgUrl?: string
}
