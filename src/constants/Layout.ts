import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const HOME_INFOS = [
  {
    id: 1,
    message: "Aqui na Telzir você pode falar a vontade.",
  },
  {
    id: 2,
    message: "Aqui na Telzir você pode falar a vontade. Principalmente contratando nossos planos.",
  },
  {
    id: 3,
    message: "Aqui na Telzir você pode falar a vontade.",
  },
  {
    id: 4,
    message: "Aqui na Telzir você pode falar a vontade. Principalmente contratando nossos planos.",
  },
];

export const PLANS_INFOS = [
  {
    id: 1,
    title: 'FaleMais 30',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum risus quis dolor mollis, ut egestas velit eleifend.',
  },
  {
    id: 2,
    title: 'FaleMais 60',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum risus quis dolor mollis, ut egestas velit eleifend.',
  },
  {
    id: 3,
    title: 'FaleMais 120',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum risus quis dolor mollis, ut egestas velit eleifend.',
  },
];

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
