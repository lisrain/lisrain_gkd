import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yueme.itv',
  name: '小翼管家',
  groups: [
    {
      key: 1,
      name: '弹窗类-主页弹窗广告',
      desc: '关闭首页弹窗广告',
      rules: [
        {
          matches: [
            '@[vid="img_close"][visibleToUser=true] - [vid="content_layout"] > * + [vid="adv_click"]',
          ],
          fastQuery: true,
          activityIds: [
            'com.chinatelecom.smarthome.module.mainpage.ui.SmartHomeActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部类-首页推广局部广告',
      desc: '自动关闭首页推广局部小广告',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.chinatelecom.smarthome.module.mainpage.ui.SmartHomeActivity',
          matches:
            '@[vid="img_close"][visibleToUser=true] <<n [vid="drag_layout"]',
        },
      ],
    },
  ],
});
