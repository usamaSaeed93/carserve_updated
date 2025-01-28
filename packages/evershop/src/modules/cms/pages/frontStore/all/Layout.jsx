import React from 'react';
import Area from '@components/common/Area';
import LoadingBar from '@components/common/LoadingBar';
import './Layout.scss';
import './tailwind.scss';
import Footer from './NewFooter';

export default function Layout() {
  return (
    <>
      <LoadingBar />
      {/* <div className="header grid grid-cols-3 mb-0">
        <Area
          id="header"
          noOuter
          coreComponents={[
            {
              component: { default: Area },
              props: {
                id: 'icon-wrapper',
                className: 'icon-wrapper flex justify-end space-x-4'
              },
              sortOrder: 20
            }
          ]}
        />
      </div> */}
      <div className='h-10 bg-[#095c94] flex flex-row justify-between px-20' >
        <p className='text-yellow-400 font-semibold'>
          Call us: 1234567890
        </p>
        <p className='text-yellow-400 font-semibold'>
          Location : 123, abc street, xyz city
        </p>
      </div>
      <main className="content">
        <Area id="content" noOuter />
      </main>
      <div className="footer">
        <Area id="footer" noOuter coreComponents={[]} />
      </div>
      <Footer />
    </>

  );
}

export const layout = {
  areaId: 'body',
  sortOrder: 1
};
