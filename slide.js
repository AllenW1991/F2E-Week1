$(function () {
  let lis = $(".slide_slide > li");
  let btnRight = $(".slideButtonRight");
  let btnLeft = $(".slideButtonLeft");

  const firstPosition = $(".positionLeft")
  const midPosition = $(".positionMid")
  const lastPosition = $(".positionRight")

  btnRight.on("click", function () {
    console.log($(".positionRight").position());
    firstPosition.removeClass().addClass("slideOut");
    midPosition.removeClass().addClass("positionLeft");
    lastPosition.removeClass().addClass("positionMid");
  })

  // for (let i = 0; i < lis.length; i++) {
  //   console.log(lis[i].position());
  // }
  // for (let i = 0; i < lis.length; i++) {
  //   console.log(lis[i].position());
  // }
  //   positionArr.push({
  //     "width": fetchComputedStyle(lis[i], "width"),
  //     "height": fetchComputedStyle(lis[i], "height"),
  //     "left": fetchComputedStyle(lis[i], "left"),
  //     "top": fetchComputedStyle(lis[i], "top")
  //   });
  // }
  // console.log(positionArr);

  // function fetchComputedStyle(obj, property) {
  //   if (window.getComputedStyle) {
  //     property = property.replace(/([A-Z])/g, function (match, $1) {
  //       return "-" + $1.toLowerCase();
  //     });
  //     return windows.getComputedStyle(obj)[property];
  //   } else {
  //     property = property.replace(/\-([a-z])/g, function (match, $1) {
  //       return $1.toUpperCase()
  //     })
  //     return obj.currenyStyle[property];
  //   }
  // }
})
