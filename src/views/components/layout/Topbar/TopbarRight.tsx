import React from 'react';
import Language from '../Language';

interface Props {}

const TopbarRight = (props: Props) => {
  return (
    <div className="admin-topbar-right absolute right top h-full flex items-center">
      <Language variant="outlined" />
    </div>
  );
};

export default TopbarRight;
