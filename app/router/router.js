import Home   from '../components/home/index';
import List   from '../components/page/manage';
import Game   from '../components/game/index';

const routes = [
  {
    path      : "/:area",
    exact     : true,
    component : Home
  },
  {
    path      : "/:area/manage/:main",
    exact     : false,
    component : List
  }
]

export default routes;
