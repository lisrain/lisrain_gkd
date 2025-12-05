import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zjwh.android_wh_physicalfitness',
  name: '运动世界',
  groups: [
    {
      key: 1,
      name: '弹窗类-全屏广告',
      desc: '仅适配运动结束后的广告弹窗',
      fastQuery: true,
      rules: [
        {
          activityIds: '.mvi.run.RunHistoryDetailActivity',
          matches: [
            '[text="广告"]',
            '@[desc="top_close_button"][visibleToUser=true][width=height] <<n [id="com.kwad.dy.sdk:id/ksad_tk_view"]',
          ],
        },
      ],
    },
  ],
});
