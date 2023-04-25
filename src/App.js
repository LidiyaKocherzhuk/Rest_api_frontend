import {Route, Routes} from 'react-router-dom';

import './App.css';
import {Users, NotFound, Friends, MaxFollowing, NotFollowing} from './pages';
import {MainLayout} from './layouts';

function App() {
    return (
        <div className={'App'}>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Users/>}/>

                    <Route path={':id/friends'} element={<Friends/>}/>
                    <Route path={'max-following'} element={<MaxFollowing/>}/>
                    <Route path={'not-following'} element={<NotFollowing/>}/>

                    <Route path={'*'} element={<NotFound/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
