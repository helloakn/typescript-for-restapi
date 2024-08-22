import ServiceCheckController from '@/app/controllers/serviceCheck.controller';

import Routers from '@/core/route'
import { REQUEST_METHODS } from '@/config';
const { GET, POST } = REQUEST_METHODS;
const routers = new Routers();

export default routers
  .addRoute([GET], '/health-check', ServiceCheckController.healthCheck)
  .addRoute([GET, POST], '/is-maintenance', ServiceCheckController.isMaintenance)
  .addRoute([GET], '/demo', ServiceCheckController.validateDemo);
