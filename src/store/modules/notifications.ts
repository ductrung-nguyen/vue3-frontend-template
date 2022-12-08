import { defineStore } from 'pinia';

export interface NotificationItem {
  id: string;
  // The title content of the notification
  title: string;
  description: string;
  avatar: string;
  datetime: string;
  type: string;
  read?: boolean;
  extra?: string;

  // Whether to show strikethrough on the title
  titleDelete?: boolean;
  clickClose?: boolean;
  color?: string;
}

export interface NotificationGroup {
  key: string;
  name: string;
  list: NotificationItem[];
  unreadlist?: NotificationItem[];
}

interface NotificationState {
  notifications: NotificationGroup[];
}

export const useNotificationStore = defineStore({
  id: 'notification-store',
  state: (): NotificationState => ({
    notifications: [
      {
        key: '1',
        name: 'Pull requests',
        list: [
          {
            id: '000000001',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
            title: 'First PR',
            description: '',
            datetime: '2017-08-09',
            type: '1',
          },
          {
            id: '000000002',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
            title: 'Second PR',
            description: '',
            datetime: '2017-08-08',
            type: '1',
          },
          {
            id: '000000003',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
            title: 'Third PR',
            description: '',
            datetime: '2017-08-07',
            // read: true,
            type: '1',
          },
          {
            id: '000000004',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
            title: 'Forth PR',
            description: '',
            datetime: '2017-08-07',
            type: '1',
          },
          {
            id: '000000005',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
            title: 'Fifth PR',
            description: '',
            datetime: '2017-08-07',
            type: '1',
          },
          {
            id: '000000006',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
            title: 'Sixth PR',
            description: '',
            datetime: '2017-08-07',
            type: '1',
          },
          {
            id: '000000007',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
            title: 'Seventh PR',
            description: '',
            datetime: '2017-08-07',
            type: '1',
          },
          {
            id: '000000008',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
            title: 'Eighth PR',
            description: '',
            datetime: '2017-08-07',
            type: '1',
          },
          {
            id: '000000009',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
            title: 'Nineth PR',
            description: '',
            datetime: '2017-08-07',
            type: '1',
          },
          {
            id: '000000010',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
            title: 'Tenth',
            description: '',
            datetime: '2017-08-07',
            type: '1',
          },
        ],
      },
      {
        key: '2',
        name: 'System',
        list: [
          {
            id: '000000006',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
            title: 'The idxcluster on NLD7 has been down',
            description: '2/3 idxclusters were down',
            datetime: '2017-08-07',
            type: '2',
            clickClose: true,
          },
          {
            id: '000000007',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
            title: 'NLD9: The fluentbit has no traffic',
            description: '(NLD9) fluentbit has dropped throughput to 0',
            datetime: '2017-08-07',
            type: '2',
            clickClose: true,
          },
          {
            id: '000000008',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
            title: 'NLD7: The queue full',
            description: '(NLD7) the processing queue full',
            datetime: '2017-08-07',
            type: '2',
            clickClose: true,
          },
        ],
      },
      {
        key: '3',
        name: 'Others',
        list: [
          {
            id: '000000009',
            avatar: '',
            title: 'Permission request',
            description: 'User `clement` has requested access in X',
            datetime: '',
            extra: '',
            color: '',
            type: '3',
          },
          {
            id: '000000010',
            avatar: '',
            title: 'Permission request',
            description: 'User `Y` has requested access in ABC',
            datetime: '',
            extra: '',
            color: 'red',
            type: '3',
          },
          {
            id: '000000011',
            avatar: '',
            title: 'Permission request',
            description: 'User `Z` has requested access in XYZ',
            datetime: '',
            extra: '',
            color: 'gold',
            type: '3',
          },
        ],
      },
    ],
  }),
  getters: {},
  actions: {
    getAllNotifications(): NotificationGroup[] {
      return this.notifications;
    },
  },
});
