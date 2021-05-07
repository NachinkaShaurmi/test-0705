const textTransform = (text) => {
  let result = {};
  try {
    const arr = text
      .split(",")
      .map((el) => el.split(":"))
      .filter((el) => el[0].trim() !== "");
    arr.forEach((el) => (result[el[0].trim()] = el[1].trim()));
  } catch (error) {
    return {}
  }
  return result;
};

export default textTransform;
