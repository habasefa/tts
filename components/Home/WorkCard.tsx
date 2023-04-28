import React from 'react';
import 'antd/dist/antd.css';

const WorkCard = (props: any) => {
  return (
    <div className="mt-10 flex flex-col items-center font-minionPro">
      <div style={{ width: '400px', height: '300px', overflow: 'hidden', objectFit: 'cover' }}>
        <img src={props.image} alt="me" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="px-4">
        <h1 className="text-[#1A3765] text-center text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-[#1A3765] font-bold font-minionPro mt-5">
          {props.title}
        </h1>
        <p className="text-[#1A3765] text-center text-lg md:text-xl lg:text-xl 2xl:text-2xl">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
