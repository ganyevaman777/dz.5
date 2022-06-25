const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const euro = document.querySelector("#euro");


function convert(elem, target, third, isTrue, wasTrue) {
  elem.addEventListener("input", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();

    request.addEventListener("load", () => {
      const response = JSON.parse(request.response);
      if (isTrue < 14) {
        target.value = (+elem.value / response.usd).toFixed(2);
        third.value = (+elem.value / response.euro).toFixed(2);
      } else if (wasTrue){
        target.value = (+elem.value * response.usd).toFixed(2);
        third.value = (+target.value / response.euro).toFixed(2);
      }else {
          target.value = (+elem.value * response.euro).toFixed(2);
          third.value = (+elem.value * response.was).toFixed(2);
      }

      elem.value === "" ? (target.value = "", third.value = "") : null;
      third.value === "" ? (target.value = "") : null;
    });
  });
}

convert(som, usd, euro, 12);
convert(usd, som, euro, 16, 13);
convert(euro, som, usd);

