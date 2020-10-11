import React from 'react';
import '../../assets/styles/molecules/homeHeader.css';

import { MyNameHeder } from '../molecules';
import { Title } from '../atoms/';

const HomeHeader = () => {
  return (
    <div className="HomeHeader">
      <MyNameHeder />
      <div className="HomeHeader-Text">
        <Title content="Hi!, I’m a backend developer. Web development" />
      </div>
    </div>
  );
};

export default HomeHeader;