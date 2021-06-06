import React from 'react'
import {Link,Route} from 'react-router-dom'

import AdminDashboard  from './AdminDashboard'

import Form from './Form'

const App=(props)=>{
    return (
        <div className="container">
            <p><Link to="/Form"> Form</Link>
            <Link to="/admindashboard">AdminDashboard</Link>
            </p>

            <Route path="/form" component={Form} exact={true}/>
            <Route  path="/admindashboard" component={AdminDashBoard}/>
        </div>
    )
}

export default App