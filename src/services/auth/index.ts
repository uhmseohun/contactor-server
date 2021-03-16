import Joi from 'joi';
import { createService } from '../index';
import * as controllers from './controllers';

export default createService({
  name: '인증 서비스',
  baseURL: '/auth',
  routes: [
    {
      path: '/',
      method: 'post',
      needAuth: false,
      needPermission: false,
      validateSchema: {
        username: Joi.string().required(),
        password: Joi.string().required(),
      },
      handler: controllers.verifyUser,
    },
  ],
});
