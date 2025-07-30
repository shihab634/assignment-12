import React from 'react';
import { Link } from 'react-router';

const ContentManagement = () => {

  return (
    <div>
      <Link className='btn btn-accent' to={'add-blog'}>Add Blog</Link>
    </div>
  );
};

export default ContentManagement;