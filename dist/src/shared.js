"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addHermesQueryParams = void 0;
const URLUtils_1 = __importDefault(require("./URLUtils"));
const playerEnvironment_1 = __importDefault(require("./playerEnvironment"));
const localStorageAdapter_1 = __importDefault(require("./localStorageAdapter"));
function addHermesQueryParams(url, playerData, isEmbed, isSticky, visitorId) {
    let queryParams = {
        t: "video",
        cp: playerData.isPremier,
        ct: playerData.type,
        durl: playerData.watchpageUrl,
        cid: playerData.videoId,
        cuu: playerData.videoUsername,
        cuid: playerData.videoUserId,
        cmg: playerData.contentMainGenre,
        cg: playerData.contentGenres,
        cc: playerData.contentCountry,
        cgp: playerData.contentGroup,
        ce: playerData.contentEvents,
        cro: playerData.contentRatingOption,
        e: isEmbed,
        s: isSticky,
        cct: playerData.contentContentType,
        ep: playerData.embedPosition,
        cur: playerData.videoUserRole,
        vt: playerData.videoTags,
        vfid: playerData.filmId,
        vft: playerData.filmTitle,
        vfg: playerData.filmGenres,
        vc: playerData.videoChannel,
        vcid: playerData.videoChannelId,
        vct: playerData.videoCategory,
        vctid: playerData.videoCategoryId,
        cpr: playerData.preview,
        lst: playerData.livestreamingTags,
        vid: visitorId,
    };
    let device = "desktop";
    if (playerEnvironment_1.default.isMobileSite() || playerEnvironment_1.default.isLiteSite()) {
        device = "mobile";
    }
    queryParams["d"] = device;
    const ref = document.referrer;
    var referrer = ref.split('/')[2];
    if (referrer) {
        queryParams["rdm"] = referrer;
        queryParams["rdv"] = device;
    }
    const userId = localStorageAdapter_1.default.getItem("vidio_user_id");
    if (userId) {
        queryParams["wid"] = userId;
    }
    for (const [key, value] of Object.entries(queryParams)) {
        url = URLUtils_1.default.addQueryParam(url, key, encodeURIComponent(value));
    }
    return url;
}
exports.addHermesQueryParams = addHermesQueryParams;
