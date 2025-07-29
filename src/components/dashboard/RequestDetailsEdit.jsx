import React from 'react';
import { useLoaderData } from 'react-router';

const RequestDetailsEdit = () => {
  const data = useLoaderData()
  console.log(data);
  
  return (
    <div>
      edit
    </div>
  );
};

export default RequestDetailsEdit;