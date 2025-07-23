import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const audio: DeepPartial<Translation["audio"]> = {
    manager: {
        reduce: "說話時降低音量",
        allow: "播放聲音",
    },
    message: "聲音設置",
    disable: "關掉你的麥克風",
};

export default audio;
