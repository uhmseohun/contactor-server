import { createService } from '../index';
import * as controllers from './controllers';

export default createService({
  name: '예방 접종 센터 서비스',
  baseURL: '/vaccine-center',
  routes: [
    {
      path: '/nearby',
      method: 'get',
      needAuth: false,
      needPermission: false,
      handler: controllers.getNearbyVaccineCenters,
    },
  ],
});
