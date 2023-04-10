import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const data = [
    {name: 'A1', uv: 60, pv: 200, amt: 200},
    {name: 'A2', uv: 58, pv: 200, amt: 200},
    {name: 'A3', uv: 53, pv: 200, amt: 200},
    {name: 'A4', uv: 42, pv: 200, amt: 200},
    {name: 'A5', uv: 57, pv: 200, amt: 200},
    {name: 'A6', uv: 55, pv: 200, amt: 200},
    {name: 'A7', uv: 60, pv: 200, amt: 200},
    {name: 'A8', uv: 60, pv: 200, amt: 200},
];  
const Sdata = () => {
    return (<>
        <h1 className=' font-bold text-5xl text-center mt-5'>Assignment Analytics</h1>
        <div className='mt-5 mx-56 bg-black pt-6 pb-5'>
            
  <LineChart width={1000} height={500} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>

        </div>
        </>
    );
};

export default Sdata;