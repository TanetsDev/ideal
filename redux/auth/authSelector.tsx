const getName = (state: any) => state.auth.name;

const getLastName = (state: any) => state.auth.lastName;
const getEmail = (state: any) => state.auth.email;

const getAddress = (state: any) => state.auth.address;

const getPhone = (state: any) => state.auth.phone;

const getid = (state: any) => state.auth.id;
const selectToken = (state: any) => state.auth.token;

const authSelector = {
  selectToken,
  getName,
  getLastName,
  getEmail,
  getAddress,
  getid,
  getPhone,
};
export default authSelector;
