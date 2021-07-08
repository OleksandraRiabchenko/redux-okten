import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Users from './users/Users';
import Posts from './posts/Posts';
import Comments from './comments/Comments';

export default function App() {
    return (
        <Router>
            <div>
                <Link to={'/users'}>users page</Link><br/>
                <Link to={'/posts'}>posts page</Link><br/>
                <Link to={'/comments'}>comments page</Link>

                <Switch>
                    <Route path={'/users'} component={Users}/>
                    <Route path={'/posts'} component={Posts}/>
                    <Route path={'/comments'} component={Comments}/>
                </Switch>
            </div>
        </Router>
    );
}


