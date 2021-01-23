import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todosState } from '../../recoil/todo';
import { colorState } from '../teams.application';

const colors = ['team1', 'team2', 'team3'];

const Circle = ({
  color,
  ...props
}: {
  color: any;
} & any) => {
  const selectedColor = useRecoilValue(colorState);
  return (
    <div
      className={`flex items-center justify-center m-3 w-16 h-16 rounded-xl bg-${color} transform transition duration-500 hover:scale-125 `}
      {...props}
    >
      {selectedColor === color ? (
        <FaCheckCircle style={{ color: '#004e66', fontSize: 20 }} />
      ) : null}
    </div>
  );
};

export const TeamColor = () => {
  const [color, setColor] = useRecoilState(colorState);

  return (
    <div className="flex flex-row">
      {colors.map((c: any) => (
        <Circle onClick={() => setColor(c)} color={c} />
      ))}
    </div>
  );
};

export default TeamColor;
