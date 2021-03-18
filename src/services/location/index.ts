import Joi from 'joi';
import { createService } from '../index';
import * as controllers from './controllers';

export default createService({
  name: '위치 로그 서비스',
  baseURL: '/location',
  routes: [
    {
      path: '/',
      method: 'post',
      needAuth: true,
      needPermission: false,
      validateSchema: {
        lat: Joi.number().required(),
        lng: Joi.number().required(),
      },
      handler: controllers.createLocationLog,
    },
  ],
});
