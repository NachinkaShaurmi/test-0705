import { v4 as uuidv4 } from 'uuid';

const responseTransform = (data) => {
  let dataView;
  if (data) {
    if (Array.isArray(data)) {
      dataView = data.map((el) =>
        Object.entries(el).map((obj) => <p key={uuidv4()}>{`${obj[0]} : ${obj[1]}`}</p>)
      );
    } else {
      dataView = Object.entries(data).map((el) => (
        <p key={uuidv4()}>{`${el[0]} : ${el[1]}`}</p>
      ));
    }
  }
  return dataView;
};

export default responseTransform;
