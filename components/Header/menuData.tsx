const menuData: any[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "/",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/",
    newTab: false,
  },
  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Fake Page",
        path: "/",
        newTab: false,
      },
      {
        id: 42,
        title: "Another Page",
        path: "/",
        newTab: false,
      },
      {
        id: 43,
        title: "Fake  Page",
        path: "/",
        newTab: false,
      }
    ],
  },
];
export default menuData;
