/*
 * A dummy hook that returns static data for the logged in user
 */
export const useAuth = () => {
  return {
    user: {
      id: "1",
      name: "GoodGymRunner",
      avatar: "/img/default-avatar.png",
    },
  };
};
