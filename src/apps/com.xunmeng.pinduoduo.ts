import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xunmeng.pinduoduo',
  name: '拼多多',
  groups: [
    {
      key: 1,
      name: '局部类-隐藏搜索发现',
      desc: '自动点击隐藏搜索发现',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.NewPageActivity',
          matches:
            '@[desc="隐藏搜索发现"][visibleToUser=true] - [text="搜索发现"]',
        },
      ],
    },
  ],
});
