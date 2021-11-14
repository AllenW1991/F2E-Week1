$(function () {




  $.ajax({
    type: 'GET',
    url: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=10&$format=JSON', //欲呼叫之API網址(此範例為台鐵車站資料)
    dataType: 'json',
    headers: GetAuthorizationHeader(),
    success: function (data) {
      data.forEach(item => {
        console.log(item);
      });
    }
  });
});

function GetAuthorizationHeader() {
  var AppID = '118d129a5f4c422e9b1ad2fdff1c5d24';
  var AppKey = 'qVoxDO9Qkau84fpCOlQN7RFHjg0';

  var GMTString = new Date().toGMTString();
  var ShaObj = new jsSHA('SHA-1', 'TEXT');
  ShaObj.setHMACKey(AppKey, 'TEXT');
  ShaObj.update('x-date: ' + GMTString);
  var HMAC = ShaObj.getHMAC('B64');
  var Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';

  return { 'Authorization': Authorization, 'X-Date': GMTString /*,'Accept-Encoding': 'gzip'*/ }; //如果要將js運行在伺服器，可額外加入 'Accept-Encoding': 'gzip'，要求壓縮以減少網路傳輸資料量
}
