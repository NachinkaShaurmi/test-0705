const textTransformFromObject = (obj) => {
  return Object.entries(obj).reduce(
    (acc, el) => acc + `${el[0]} : ${el[1]},\n`, "");
};

export default textTransformFromObject;
