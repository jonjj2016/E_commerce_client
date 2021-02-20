import axios from 'axios';


export default function *(method, url, data) {
  const config={
        headers:{
            'Content-Type': 'application/json'
        }
    }
  const res = yield axios[method](url, data, config);
  console.log(res);
  return res
 };