import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const error: DeepPartial<Translation["error"]> = {
    accessLink: {
        title: "訪問連結錯誤",
        subTitle: "找不到地圖。請檢查你的訪問連結。",
        details: "如果你想了解更多信息，你可以聯繫管理員或聯繫我們: hello@workadventu.re",
    },
    connectionRejected: {
        title: "連結被拒絕",
        subTitle: "你無法加入該世界。請稍後重試 {error}.",
        details: "如果你想了解更多信息，你可以聯繫管理員或連繫我們: hello@workadventu.re",
    },
    connectionRetry: {
        unableConnect: "無法連結到 WorkAdventure. 請檢查網路連接。",
    },
    errorDialog: {
        title: "錯誤 😱",
        hasReportIssuesUrl: "如果你想了解更多信息，你可以聯繫管理員或在以下網址回報問題:",
        noReportIssuesUrl: "如果你想了解更多信息，你可以聯繫世界管理員。",
        messageFAQ: "你也可以查看我們的:",
        reload: "重新載入",
        close: "關閉",
    },
};

export default error;
