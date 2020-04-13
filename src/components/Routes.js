import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import HireMe from '../papers/HireMe';
import Resume from '../papers/viewResume';
import CapPaper from '../papers/CapPaper';
import TarynPaper from '../papers/TarynPaper';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />  
                <Route path="/HireMe" exact component={HireMe} />   
                <Route path="/Resume" exact component={Resume} />  
                <Route path="/CapPaper" exact component={CapPaper} /> 
                <Route path="/TarynPaper" exact component={TarynPaper} />                
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;