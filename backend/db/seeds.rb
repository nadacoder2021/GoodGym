# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#

users = User.create([
  { name: "Afwerki Zerezghi" },
  { name: "Niamh Peters" },
  { name: "Carla Bortolotti" },
  { name: "Tabitha Twitchett"},
  { name: "Hira Saqib" },
  { name: "Feiven Tweolde" },
  { name: "Muhammad Ellahi" },
])

sessions = Session.create([
  {
    title: "Food parcel deliveries",
    strapline: "Helping people with food essentials",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    start_time: Date.new(2021, 6, 1),
    image: "/img/foodbank.jpg",
  },
  {
    title: "Wednesday Group Run",
    strapline: "Run with us to help out at a local community centre",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    start_time: Date.new(2021, 6, 2),
    image: "/img/group-run.jpg",
  },
  {
    title: "Litter picking in the park",
    strapline: "Let's clean up our local green spaces",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    start_time: Date.new(2021, 6, 5),
    image: "/img/litter.jpg",
  },
  {
    title: "Wednesday Group Run",
    strapline: "Run with us to help out at a local community centre",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    start_time: Date.new(2021, 6, 9),
    image: "/img/group-run.jpg",
  },
  {
    title: "Prescription for Mrs. P",
    strapline: "Get Mrs. P the medicine she needs",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    start_time: Date.new(2021, 6, 11),
    image: "/img/prescription.jpg",
  },
  {
    title: "Wednesday Group Run",
    strapline: "Run with us to help out at a local community centre",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    start_time: Date.new(2021, 6, 16),
    image: "/img/group-run.jpg",
  },
  {
    title: "Wednesday Group Run",
    strapline: "Run with us to help out at a local community centre",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    start_time: Date.new(2021, 6, 23),
    image: "/img/group-run.jpg",
  },
  {
    title: "Groceries for Mr. X",
    strapline: "Pick up Mr. X's weekly shop",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    start_time: Date.new(2021, 6, 25),
    image: "/img/groceries.jpg",
  },
  {
    title: "Wednesday Group Run",
    strapline: "Run with us to help out at a local community centre",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    start_time: Date.new(2021, 6, 30),
    image: "/img/group-run.jpg",
  },
])

Registration.create!([
  { session_id: sessions[0].id, user_id: users[1].id },
  { session_id: sessions[0].id, user_id: users[2].id },
  { session_id: sessions[0].id, user_id: users[3].id },
  { session_id: sessions[1].id, user_id: users[2].id },
  { session_id: sessions[1].id, user_id: users[3].id },
  { session_id: sessions[2].id, user_id: users[1].id },
  { session_id: sessions[2].id, user_id: users[3].id },
  { session_id: sessions[3].id, user_id: users[1].id },
  { session_id: sessions[3].id, user_id: users[2].id },
  { session_id: sessions[3].id, user_id: users[3].id },
  { session_id: sessions[4].id, user_id: users[1].id },
  { session_id: sessions[4].id, user_id: users[2].id },
  { session_id: sessions[4].id, user_id: users[3].id },
  { session_id: sessions[5].id, user_id: users[1].id },
  { session_id: sessions[5].id, user_id: users[3].id },
  { session_id: sessions[0].id, user_id: users[0].id },
  { session_id: sessions[7].id, user_id: users[1].id },
  { session_id: sessions[7].id, user_id: users[1].id },
  { session_id: sessions[8].id, user_id: users[2].id },
  { session_id: sessions[8].id, user_id: users[3].id },
  { session_id: sessions[8].id, user_id: users[4].id },
  { session_id: sessions[8].id, user_id: users[5].id },
  { session_id: sessions[8].id, user_id: users[6].id },
])
