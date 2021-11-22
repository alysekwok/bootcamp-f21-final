import urls from "../../../utils/urls";

const routes = [
  {
    name: "Home",
    link: urls.pages.index,
    auth: false,
    atEnd: false,
  },
  {
    name: "SSR",
    link: urls.pages.ssr,
    auth: false,
    atEnd: false,
  },
  {
    name:'Adopt',
    link: urls.pages.ado,
    auth: false,
    atEnd: false,
  },
  {
    name: 'About',
    link: urls.pages.abo,
    auth: false,
    atEnd: false,
  },
  {
    name:'Admin',
    link: urls.pages.ssr,
    auth: false,
    atEnd: false,
  },
  {
    name: "Login",
    link: urls.pages.login,
    auth: false,
    atEnd: true,
  },
  {
    name: "App Home",
    link: urls.pages.app.home,
    auth: true,
  },
];

export default routes;
