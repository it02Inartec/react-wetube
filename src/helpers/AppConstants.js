export const API_BASE = `https://youtube.googleapis.com/youtube/v3/`;
// maxResults=25 is for limit results (default=5)
export const SEARCH_URL = `${ API_BASE }search?part=snippet&type=video&key=${ process.env.API_KEY }`;
export const VIDEO_URL = `${ API_BASE }videos?part=snippet,contentDetails,statistics,status,player&key=${ process.env.API_KEY }`;