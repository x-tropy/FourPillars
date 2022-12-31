import * as React from 'react';
import './style.css';
import { TenGods } from './foundamental/tenGods';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {new TenGods('戊', '癸').godFullName()}
    </div>
  );
}
