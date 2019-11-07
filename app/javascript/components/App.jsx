import React from "react";
import { Provider } from 'react-redux'

import store from '../redux/store'
import Routes from "../routes/Index";

export default props => <>
  <Provider store={store}>
    <h1> Hello </h1>
    {Routes}
  </Provider>
</>
  ;

