import React, { useEffect } from 'react';
import "./App.css"
import AxiosClient from './Components/Axios';
import { Button } from './Components/Button';
import { Containner } from './Components/Containner';
import { Getting } from './Components/Getting';
import { Input } from './Components/Input';
import { Status } from './Components/Status';
import { setProduct } from './Redux/Actions/ProductAction';
import { useSelector, useDispatch } from "react-redux";
import { ProductList } from './Components/ProductsList';
import { State } from './Redux/Reducer';
import { Card, Row, Col } from 'antd';
function App() {
  const dispatch = useDispatch()
useEffect(() => {
  const getData = () => {
    AxiosClient.get("data.json").then((res)=>{
        //console.log(typeof(res.data));
        dispatch(setProduct(res.data))
    })
}
    getData();
}, [])

  return (
    <div className="App">
      <Getting name='Jonh' phone={1234} />
    {/*   <Status status="error" /> */}
      <Button handleClick={(event, id) => { console.log("Click", event, id) }} />
      <Input handleChange={() => { console.log("hi") }} />
      <Containner style={{ border: '1px soldi black', padding: '1rem' }} />
   
        <ProductList  />
                                      
      
    </div>
  );
}


export default App;


