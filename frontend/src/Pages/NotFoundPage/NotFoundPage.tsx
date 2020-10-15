import React from 'react';

const NotFoundPage: React.FC = () => (
  <div className='page-wrap d-flex flex-row align-items-center mt-4'>
    <div className='container mt-4'>
      <div className='row justify-content-center mt-4'>
        <div className='col-md-12 text-center'>
          <span className='display-1 d-block'>404</span>
          <div className='mb-4 lead'>The page you are looking for was not found.</div>
          <a href='/' className='btn btn-link'>
            Back to Home
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
