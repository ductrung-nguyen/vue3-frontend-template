import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess, resultError } from '../_util';
import { ResultEnum } from '../../src/enums/httpEnum';

const userInfo = {
  name: 'A user',
  userid: '00000001',
  email: 'test@gmail.com',
  signature: 'Nothing is impossible',
  introduction: 'Smile, work hard, appreciate',
  title: 'Interaction expert',
  group: 'LogOps - Fullstack - ToolDev - MachineLearning',
  tags: [
    {
      key: '0',
      label: 'Very thoughtful',
    },
    {
      key: '1',
      label: 'Focus on design',
    },
    {
      key: '2',
      label: 'Easy to angry',
    },
  ],
  notifyCount: 12,
  unreadCount: 11,
  country: 'France',
  address: 'Paris',
  phone: '0X-XX-XX-XX-XX',
};

export default [
  {
    url: '/basic-api/account/getAccountInfo',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(userInfo);
    },
  },
  {
    url: '/basic-api/user/sessionTimeout',
    method: 'post',
    statusCode: 401,
    response: () => {
      return resultError();
    },
  },
  {
    url: '/basic-api/user/tokenExpired',
    method: 'post',
    statusCode: 200,
    response: () => {
      return resultError('Token Expired!', { code: ResultEnum.TIMEOUT as number });
    },
  },
] as MockMethod[];
