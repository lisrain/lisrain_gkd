import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 1,
      name: '测试类-签到领现金弹窗',
      desc: '关闭签到领现金-大额省钱包弹窗',
      matchRoot: true,
      rules: [
        {
          activityIds: 'com.taobao.tao.welcome.Welcome',
          matches: ['[text="大额省钱包"]', '[text$=".jpg_"]'],
        },
        {
          activityIds: 'com.taobao.tao.welcome.Welcome',
          matches: ['[text="签到频道红包"]', '@Button <2 View'],
        },
      ],
    },
  ],
});
