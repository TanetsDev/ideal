import { RootState } from "../store";

const getName = (state: any) => state.auth.user?.name;
const getLastName = (state: any) => state.auth.user?.lastName;
const getEmail = (state: any) => state.auth.user?.email;
const getAddress = (state: any) => state.auth.user?.address;
const getPhone = (state: any) => state.auth.user?.phone;

const getid = (state: any) => state.auth.user?.id;
const selectToken = (state: any) => state.auth.token;

const getUser = (state: RootState) => state.auth.user;

const authSelector = {
  selectToken,
  getName,
  getLastName,
  getEmail,
  getAddress,
  getid,
  getPhone,
  getUser,
};
export default authSelector;
