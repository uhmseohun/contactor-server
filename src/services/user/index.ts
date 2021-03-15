import Joi from 'joi';
import { createService } from '../index';
import * as controllers from './controllers';

export default createService({
  name: '사용자 서비스',
  baseURL: '/user',
  routes: [
    {
      path: '/',
      method: 'post',
      needAuth: false,
      needPermission: false,
      validateSchema: {
        username: Joi.string().required(),
        password: Joi.string().required(),
        name: Joi.string().required(),
        phone: Joi.string().required(),
        birthdate: Joi.string().required(),
        address: Joi.object({
          street: Joi.string().required(),
          detail: Joi.string().required(),
        }).required(),
      },
      handler: controllers.createUser,
    },
  ],
});
