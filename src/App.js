
import './Stylesheets/App.css';
import BudgetApp from './BudgetApp';
import Landing from './Landing';

import { Switch, Route } from 'react-router-dom';

const App =() => {
  return (
    <div>
      <Switch>
    
    <Route path='/' component={BudgetApp}></Route>
    
    </Switch>
    </div>
  );
}

export default App;
