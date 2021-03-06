$(function () {
  let infoNumber = 5;


  $.ajax({
    type: 'GET',
    url: `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=${infoNumber}&$format=JSON`,
    dataType: 'json',
    headers: GetAuthorizationHeader(),
    success: function render(data) {

      function spotsShow() {
        let str = "";
        let timeformat = "Sun 24 hours；Mon 24 hours；Tue 24 hours；Wed 24 hours；Thu 24 hours；Fri 24 hours；Sat 24 hours";

        let timeformat2 = "Sun 24 hours；Sun 24 hours；Mon 24 hours；Mon 24 hours；Tue 24 hours；Tue 24 hours；Wed 24 hours；Wed 24 hours；Thu 24 hours；Thu 24 hours；Fri 24 hours；Fri 24 hours；Sat 24 hours；Sat 24 hours";
        data.forEach(item => {
          if (item.OpenTime === timeformat || timeformat2) {
            item.OpenTime = "全天候開放";
          }
          if (item.Class1 === undefined) {
            item.Class1 = "自然風景類";
          }
          if (item.Picture.PictureUrl1 === undefined) {
            item.Picture.PictureUrl1 = "TheF2E_week01/notshow1.png"
          }
          console.log(item.Picture.PictureUrl1);
          str += `
        <li class="spotsCard">
              <img
                src='${item.Picture.PictureUrl1}'
                alt='pic'
                class="cardPic"
              >
              <div class="cardContents">
                <div class="cardContent">
                  <div class="cardContentTitle">
                    <h2>${item.Name}</h2>
                    <span class="spotTag">${item.Class1}</span>
                  </div>
                  <div class="cardContentText">
                    <p>${item.DescriptionDetail}</p>
                  </div>
                </div>
                <div class="cardContentInfo">
                  <div class="location_opentime">
                    <div class="cardContentInfo-loc">
                      <img
                        src="./TheF2E_week01/icon/site.svg"
                        alt="location"
                        class="cardIcon"
                      >
                      <span>${item.Address.substr(0, 6)}</span>
                    </div>
                    <div class="cardContentInfo-time">
                      <img
                        src="./TheF2E_week01/icon/time.svg"
                        alt="clock"
                        class="cardIcon"
                      >
                      <span>${item.OpenTime}</span>
                    </div>
                  </div>
                  <div class="spotLike">
                    <img
                      src="./TheF2E_week01/icon/click.svg"
                      alt="touch"
                      class="clickIcon"
                    >
                    <span id="click-number">1293</span>
                  </div>
                </div>
              </div>
            </li>
        `
        })
        $("#spotsCards").html(str);
      }

      function showSlide() {
        let str = "";
        data.forEach(item => {
          console.log(item.Picture.PictureUrl1);
          str += `
          <li >
            <div class="slideInfo ">
              <span>我是景點資訊的拉</span>
              <span><a href="">看更多</a></span>
            </div>
            <img
              src='${item.Picture.PictureUrl1}'
              alt='123'
            >
          </li>
          `
        })
        $(".slide_slide").html(str);
      }
      spotsShow();
      showSlide();

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
