import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import resume from '../papers/viewResume';
import CapPaper from '../papers/CapPaper';
import TarynPaper from '../papers/TarynPaper';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />                  
                <Route path="/Resume" exact component={resume} />  
                <Route path="/CapPaper" exact component={CapPaper} /> 
                <Route path="/TarynPaper" exact component={TarynPaper} />                
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;