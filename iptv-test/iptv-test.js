const baseUrl = "http://116.162.6.191/zycfcdn.gdwlcloud.com/PLTV/88888888/224/";
const start = 3221225000;
const end = 3221226999;
for (let i = start; i <= end; i++) {
    console.log("#EXTINF:-1 ,IPTV");
    console.log(`${baseUrl}${i}/index.m3u8`);
}
