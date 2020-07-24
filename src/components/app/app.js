import  React from 'react';
import  ProductServises  from '../hok/ProductServises'
import  { Route, Switch} from 'react-router-dom'
import {  Cartpage, Homepage } from '../pages'

   

const App = ({ ServiceProvider })=>{
    console.log(ServiceProvider.getproduct());
    
    return (
       <Switch>
           <Route path='/' component={Homepage} exact/>

           <Route path='/antdmenue' component={Cartpage} exact/>
       </Switch>
    )
}

export default ProductServises()(App)