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

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
