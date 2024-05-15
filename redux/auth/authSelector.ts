import { RootState } from "../store";

const getName = (state: RootState) => state.auth.user?.name;
const getLastName = (state: RootState) => state.auth.user?.lastName;
const getEmail = (state: RootState) => state.auth.user?.email;
const getAddress = (state: RootState) => state.auth.user?.address;
const getPhone = (state: RootState) => state.auth.user?.phone;

const getid = (state: RootState) => state.auth.user?.id;
const selectToken = (state: RootState) => state.auth.token;
const selectIsLoading = (state: RootState) => state.auth.isLoading;

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
  selectIsLoading,
};
export default authSelector;
