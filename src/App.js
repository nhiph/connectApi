import './App.css';
import { Component } from 'react';
import Menu from './components/menu/Menu';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <div className="container">
            <div className="row">
              {this.showContentMenus(routes)}
            </div>
          </div>
        </div>
      </Router>
    );
  }

  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch> {result} </Switch>;
  }

}

export default App;
