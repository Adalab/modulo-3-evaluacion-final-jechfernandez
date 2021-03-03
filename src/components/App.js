import '../stylesheets/App.scss';
import { Route, Switch} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import CharacterDetail from './CharacterDetail';
import Footer from './Footer';

function App () {
  return (
    <div className="landing">
      <div className="page">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/character/:id"
            component={CharacterDetail}
          />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
