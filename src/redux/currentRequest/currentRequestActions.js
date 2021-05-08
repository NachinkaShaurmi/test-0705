import { SET_CURRENT,  DEL_CURRENT} from "./currentRequestTypes";

export const setCurrent = (id) => ({
  type: SET_CURRENT,
  payload: id
});
export const delCurrent = () => ({
  type: DEL_CURRENT,
});