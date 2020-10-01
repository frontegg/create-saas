import React from 'react';
import './Breadcrumbs.scss';
import Widget from '../../../Widget';
import Breadcrumbs from '../../../../../Components/Breadcrumbs';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const BreadcrumbsPage: React.FC = () => {
  const Links = [
    {
      href: '/ui-elements/',
      label: 'UI Elements',
    },
    {
      label: 'Breadcrumbs',
    },
  ];
  return (
    <div className='Breadcrumbs'>
      <div className='text-xl font-bold mb-3'>Breadcrumbs</div>
      <Widget col>
        <div className='mb-3'>
          <div className='text-sm font-light text-grey-500'>Default breadcrumbs</div>
          <div className='text-sm font-bold'>
            <span>
              Use the <code>&lt;Breadcrumbs /&gt;</code> component for breadcrumbs
            </span>
          </div>
        </div>
        <Breadcrumbs links={Links} />
      </Widget>
      <Widget col>
        <div className='mb-3'>
          <div className='text-sm font-light text-grey-500'>Icon breadcrumbs</div>
          <div className='text-sm font-bold'>
            <span>
              Use the <code>separator</code> prop for dividers between links
            </span>
          </div>
        </div>
        <Breadcrumbs links={Links} separator='>' />
        <Breadcrumbs links={Links} separator={<ArrowRightAltIcon />} />
      </Widget>
      <Widget col>
        <div className='mb-3'>
          <div className='text-sm font-light text-grey-500'>Default badges</div>
          <div className='text-sm font-bold'>
            <span>
              Use the <code>home</code> prop for breadcrumbs. Change the icon using the <code>icon</code> prop.
            </span>
          </div>
        </div>
        <Breadcrumbs showHomeIcon links={Links} separator={<ArrowRightAltIcon />} />
      </Widget>
    </div>
  );
};

export default BreadcrumbsPage;
