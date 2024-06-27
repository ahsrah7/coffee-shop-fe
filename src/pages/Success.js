import React from 'react'
import { useSearchParams } from 'react-router-dom';

function Success() {
  
  const [searchParams] = useSearchParams();
  const query = searchParams.get('payment_id');
  return (
    <div className="text-center min-h-screen flex justify-center items-center">
      <div>
      Payment is successful <br />
      Your payment payment id is : {query} </div>
      </div>
  )
}

export default Success