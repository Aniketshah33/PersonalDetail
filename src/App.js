import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



import Students  from './components/pages/Students'

import './App.css'


export default function App() {
    return (
        <Router>
            <>
                {/* <Switch>
                    <Route path="/Students" component={ Students } />
                </Switch> */}
                <Students/>
                
            </>
        </Router>
    )
}

