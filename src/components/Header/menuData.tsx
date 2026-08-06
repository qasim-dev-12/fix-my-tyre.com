import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 51,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 515,
        title: "Tyre Repair",
        path: "/services/tyre-repair",
        newTab: false,
      },
      {
        id: 5151,
        title: "Buy New Tyre",
        path: "/services/buy-new-tyre",
        newTab: false,
      },
      {
        id: 514,
        title: "Tyre Replacement",
        path: "/services/tyre-replacement",
        newTab: false,
      },
      {
        id: 5152,
        title: "Air Fill",
        path: "/services/air-fill",
        newTab: false,
      },
      {
        id: 5153,
        title: "Spare Tyre Change",
        path: "/services/spare-tyre-change",
        newTab: false,
      },
      {
        id: 5154,
        title: "Fix Puncture Tyre",
        path: "/services/fix-puncture-tyre",
        newTab: false,
      },
    ],
  },
  {
    id: 52,
    title: "Tyre Brands",
    newTab: false,
    submenu: [
      {
        id: 521,
        title: "Michelin Tyres",
        path: "/tyre-brands/michelin",
        newTab: false,
      },
      {
        id: 522,
        title: "Bridgestone Tyres",
        path: "/tyre-brands/bridgestone",
        newTab: false,
      },
      {
        id: 523,
        title: "Pirelli Tyres",
        path: "/tyre-brands/pirelli",
        newTab: false,
      },
      {
        id: 524,
        title: "Continental Tyres",
        path: "/tyre-brands/continental",
        newTab: false,
      },
      {
        id: 525,
        title: "Goodyear Tyres",
        path: "/tyre-brands/goodyear",
        newTab: false,
      },
      {
        id: 526,
        title: "Dunlop Tyres",
        path: "/tyre-brands/dunlop",
        newTab: false,
      },
      {
        id: 527,
        title: "Yokohama Tyres",
        path: "/tyre-brands/yokohama",
        newTab: false,
      },
      {
        id: 528,
        title: "Hankook Tyres",
        path: "/tyre-brands/hankook",
        newTab: false,
      },
      {
        id: 529,
        title: "Toyo Tires",
        path: "/tyre-brands/toyo",
        newTab: false,
      },
      {
        id: 5210,
        title: "Kumho Tyres",
        path: "/tyre-brands/kumho",
        newTab: false,
      },
      {
        id: 5211,
        title: "Nexen Tyres",
        path: "/tyre-brands/nexen",
        newTab: false,
      },
      {
        id: 5212,
        title: "Falken Tyres",
        path: "/tyre-brands/falken",
        newTab: false,
      },
      {
        id: 5213,
        title: "BFGoodrich Tyres",
        path: "/tyre-brands/bfgoodrich",
        newTab: false,
      },
      {
        id: 5214,
        title: "Maxxis Tyres",
        path: "/tyre-brands/maxxis",
        newTab: false,
      },
      {
        id: 5215,
        title: "Cooper Tires",
        path: "/tyre-brands/cooper",
        newTab: false,
      },
      {
        id: 5216,
        title: "View All Tyre Brands",
        path: "/tyre-brands",
        newTab: false,
      },
    ],
  },
  {
    id: 53,
    title: "Areas",
    path: "/areas",
    newTab: false,
  },
  {
    id: 54,
    title: "Warranty",
    path: "/warranty",
    newTab: false,
  },
];
export default menuData;
