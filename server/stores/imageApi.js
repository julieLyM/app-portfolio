const fs = require("fs");

const getListImg = async () => {
  const listImg = await new Promise((resolve, reject) => {
    fs.readdir("./images", { withFileTypes: true }, (err, element) => {
      if (err) {
        return reject(err);
      }
      return resolve(element);
    });
  });
  console.log(listImg);
  return listImg;
};

module.exports = { getListImg };
