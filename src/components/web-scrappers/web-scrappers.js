const axios = require("axios");
const url = "https://hashnode-hackaton-server.herokuapp.com";

const walmartCall = (item) => {
  const myData = [];

  axios
    .get(`${url}/walmart/${item}`)
    .then((res) => {
      try {
        let data = res.data.slice(0, 10);

        for (let i = 0; i < data.length; i++) {
          const item = data[i];

          let img = item["imageUrl"];
          let indexToCutString = img.indexOf("?");
          let title = item["title"]
            .replace("<mark>", "")
            .replace("</mark>", "")
            .slice(0, 100);

          const obj = {
            price: item["primaryOffer"]["offerPrice"],
            imgURL: img.slice(0, indexToCutString),
            title: title,
          };

          myData.push(obj);
        }
      } catch (err) {
        console.error(err);
      }
    })
    .catch((err) => {
      console.error(err);
    });
  return myData;
};

const wholeFoodsCall = (item) => {
  const myData = [];

  axios
    .get(`${url}/wholefoods/${item}`)
    .then((res) => {
      let data = res.data.slice(0, 10);

      for (let i = 0; i < data.length; i++) {
        const item = data[i];

        const obj = {
          price: item["regularPrice"],
          imgURL: item["imageThumbnail"],
          title: item["name"],
        };

        myData.push(obj);
      }
    })
    .catch((err) => {
      console.error(err);
    });
  return myData;
};

const safewayCall = (item) => {
  const myData = [];

  axios
    .get(`${url}/safeway/${item}`)
    .then((res) => {
      let data = res.data.slice(0, 10);

      for (let i = 0; i < data.length; i++) {
        let item = data[i];

        const obj = {
          price: item["price"],
          imgURL:
            "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
          title: item["name"],
        };

        myData.push(obj);
      }
    })
    .catch((err) => {
      console.error(err);
    });
  return myData;
};

const targetCall = (item) => {
  const myData = [];
  axios
    .get(`${url}/target/${item}`)
    .then((response) => {
      let data = response.data.slice(0, 10);

      for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let title = item["item"]["product_description"]["title"].replace("&#38", "").replace("&#8482", "");


        const obj = {
          price: item["price"]["current_retail"],
          imgURL: item["item"]["enrichment"]["images"]["primary_image_url"],
          title: title,
        };
        myData.push(obj);
      }
    })
    .catch((err) => {
      console.error(err);
    });
  return myData;
};

const apiCall = (storeName, item) => {
  switch (storeName) {
    case "Walmart":
      return walmartCall(item);
    case "Target":
      return targetCall(item);
    case "Whole Foods":
      return wholeFoodsCall(item);
    case "Safeway":
      return safewayCall(item);
    default:
      return null;
  }
};

export default apiCall;
