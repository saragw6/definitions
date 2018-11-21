import 'babel-polyfill';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';

//import 'bootstrap/dist/css/bootstrap.css';
import makeMainRoutes from './routes';

const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
