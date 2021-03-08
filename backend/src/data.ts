export const upcomingSessions = [
  {
    id: "1",
    title: "Food parcel deliveries",
    strapline: "Helping people with food essentials",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    startTime: new Date("2021-06-01"),
    image: "/img/foodbank.jpg",
  },
  {
    id: "2",
    title: "Wednesday Group Run",
    strapline: "Run with us to help out at a local community centre",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    startTime: new Date("2021-06-02"),
    image: "/img/group-run.jpg",
  },
  {
    id: "3",
    title: "Litter picking in the park",
    strapline: "Let's clean up our local green spaces",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    startTime: new Date("2021-06-05"),
    image: "/img/litter.jpg",
  },
  {
    id: "4",
    title: "Wednesday Group Run",
    strapline: "Run with us to help out at a local community centre",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    startTime: new Date("2021-06-09"),
    image: "/img/group-run.jpg",
  },
  {
    id: "5",
    title: "Prescription for Mrs. P",
    strapline: "Get Mrs. P the medicine she needs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    startTime: new Date("2021-06-11"),
    image: "/img/prescription.jpg",
  },
  {
    id: "6",
    title: "Wednesday Group Run",
    strapline: "Run with us to help out at a local community centre",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    startTime: new Date("2021-06-16"),
    image: "/img/group-run.jpg",
  },
  {
    id: "7",
    title: "Wednesday Group Run",
    strapline: "Run with us to help out at a local community centre",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    startTime: new Date("2021-06-23"),
    image: "/img/group-run.jpg",
  },
  {
    id: "8",
    title: "Groceries for Mr. X",
    strapline: "Pick up Mr. X's weekly shop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    startTime: new Date("2021-06-25"),
    image: "/img/groceries.jpg",
  },
  {
    id: "9",
    title: "Wednesday Group Run",
    strapline: "Run with us to help out at a local community centre",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    startTime: new Date("2021-06-30"),
    image: "/img/group-run.jpg",
  },
];

export const attendances: { [key: string]: string[] } = {
  "1": ["2", "3", "4"],
  "2": ["3", "4"],
  "3": ["2", "4"],
  "4": ["2", "3", "4"],
  "5": ["2", "3", "4"],
  "6": ["2", "4"],
  "7": [],
  "8": ["1", "2"],
  "9": ["2", "3", "4", "5", "6", "7"],
};
