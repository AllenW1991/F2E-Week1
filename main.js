import { cityLib } from "./lib.js"

let cacheData = cityLib;

$(function () {
  function render() {
    let str = "<option value=''>選擇縣市</option>"
    cacheData.forEach((item) => {
      str += `
      <option value="${item.CityName}">${item.CityName}</option>
      `
    });
    $("#search-city").html(str)
  };

  render();

  $("#search-area").on("change", function () {
    let area = $("#search-area").val();
    if (area === "") {
      cacheData = cityLib;
    } else {
      console.log(area);
      cacheData = cityLib.filter((item) =>
        item.Region === area
      )
    }
    render();
  })
})

