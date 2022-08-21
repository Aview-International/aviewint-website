import Image from 'next/image';
import Tooltip from '../../public/img/icons/tooltip.svg';
import Info from '../../public/img/icons/info.svg';
import Border from './Border';
import { useState } from 'react';

const CheckBox = ({ label, value, onChange, tooltip, name }) => {
  const [isChecked, setIschecked] = useState(false);
  return (
    <label className={`flex cursor-pointer items-center text-xl text-white`}>
      <span
        className={`mr-4 flex h-5 w-5 items-center justify-center ${
          isChecked ? 'gradient-1' : 'bg-white'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 border-2 border-black ${
            isChecked ? 'gradient-1' : 'bg-black'
          }`}
        ></span>
      </span>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          setIschecked(!isChecked);
          onChange(e);
        }}
        name={name}
        className="hidden"
      />
      {label}
      <div className="group relative mx-s2 mt-s1 p-2">
        <Image src={Info} alt="info" />
        <span className="invisible absolute left-[30px] z-10 h-5 w-5 group-hover:visible">
          <Image src={Tooltip} alt="Tooltip" width={50} height={50} />
        </span>
        <Border
          borderRadius="[5px]"
          classes="invisible absolute left-[50px] -top-[15px] z-10 w-48 group-hover:visible"
        >
          <p className="rounded-[5px] bg-black p-s1 text-sm">{tooltip}</p>
        </Border>
      </div>
    </label>
  );
};

export default CheckBox;
