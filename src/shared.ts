import URLUtils from './URLUtils'
import PlayerEnvironment from './playerEnvironment'
import LocalStorageAdapter from './localStorageAdapter'

type PlayerData = {
  isPremier: boolean,
  type: string,
  watchpageUrl: string,
  videoId: string,
  videoUsername: string,
  videoUserId: string,
  contentMainGenre: string,
  contentGenres: string,
  contentCountry: string,
  contentGroup: string,
  contentEvents: string,
  contentRatingOption: string,
  contentContentType: string,
  embedPosition: string,
  videoUserRole: string,
  videoTags: string,
  filmId: string,
  filmTitle: string,
  filmGenres: string,
  videoChannel: string,
  videoChannelId: string,
  videoCategory: string,
  videoCategoryId: string,
  preview: string,
  livestreamingTags: string,
}

type QueryParams = {
  t: string,
  cp: boolean,
  ct: string,
  durl: string,
  cid: string,
  cuu: string,
  cuid: string,
  cmg: string,
  cg: string,
  cc: string,
  cgp: string,
  ce: string,
  cro: string,
  e: boolean,
  s: boolean,
  cct: string,
  ep: string,
  cur: string,
  vt: string,
  vfid: string,
  vft: string,
  vfg: string,
  vc: string,
  vcid: string,
  vct: string,
  vctid: string,
  cpr: string,
  lst: string,
  vid: string,
  d?: string,
  rdm?: string,
  rdv?: string,
  wid?: string
}

export function addHermesQueryParams(url: string, playerData: PlayerData, isEmbed: boolean, isSticky: boolean, visitorId: string): string {
  let queryParams: QueryParams = {
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
  if (PlayerEnvironment.isMobileSite() || PlayerEnvironment.isLiteSite()) {
    device = "mobile";
  }
  queryParams["d"] = device;

  const ref = document.referrer;
  var referrer = ref.split('/')[2];
  if (referrer) {
    queryParams["rdm"] = referrer;
    queryParams["rdv"] = device;
  }

  const userId = LocalStorageAdapter.getItem("vidio_user_id");
  if (userId) {
    queryParams["wid"] = userId;
  }

  for (const [key, value] of Object.entries(queryParams)) {
    url = URLUtils.addQueryParam(url, key, encodeURIComponent(value));
  }

  return url;
}