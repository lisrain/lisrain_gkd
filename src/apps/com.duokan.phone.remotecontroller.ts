import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
     "id": "com.duokan.phone.remotecontroller",
      "name": "万能遥控",
      "groups": [
        {
          "key": 1,
          "name": "弹窗类-自动取消访问定位权限",
          "desc": "自动点击取消访问定位权限弹窗",
          "actionMaximum": 1,
          "rules": [
            {
              "matches": [
                "[text=\"万能遥控\"] < LinearLayout + * + LinearLayout[vid=\"buttonPanel\"] > Button[text=\"取消\"]"
              ],
              "fastQuery": true,
              "activityIds": [
                "com.xiaomi.mitv.phone.remotecontroller.HoriWidgetMainActivityV2"
              ]
            }
          ]
        }
      ]
});
