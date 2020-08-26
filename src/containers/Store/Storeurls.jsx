import React, {Fragment} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Store from "../../components/Store/Store";




const Storeurls = (props) => {
    const { match } = props;


    return (

        <Switch>
            <Route path={`${match.url}`} exact component={Store} />
            <Route render={()=>(<p>Not found</p>)} />
        </Switch>

    );
};

export default Storeurls;
