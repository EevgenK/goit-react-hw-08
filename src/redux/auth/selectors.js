const selectLoggedIn = (state) => state.auth.isLoggedIn;
const selectRefreshing = (state) => state.auth.isRefreshing;
const selectUserName = (state) => state.auth.user.name;

const authSelectors = {
  selectLoggedIn,
  selectUserName,
  selectRefreshing,
};
export default authSelectors;
