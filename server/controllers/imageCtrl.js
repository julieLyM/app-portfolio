const ImagesStore = require("./../stores/imageApi");

const listOfImages = async (req, res) => {
  try {
    const result = await ImagesStore.getListImg();
    const list = result.map(item => {
      return { name: item.name, isFile: item.isFile() };
    });
    res.send(list);
  } catch (exception) {
    res.status(500).send(exception);
    console.error(exception);
  }
};

// const getIdImage = async (req, res) => {
//   ImagesStore.getListImg();
//   const imgResult = Object.entries(list).reduce((acc, [id, val]) => {
//     return [...acc, { id, ...val }];
//   }, []);
//   console.log(imgResult);
//   res.send(imgResult);
// };

module.exports = { listOfImages, getIdImage };
