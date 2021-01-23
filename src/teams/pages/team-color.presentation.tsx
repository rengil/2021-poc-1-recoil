import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const colors = ['team1', 'team2', 'team3'];

const Circle = ({
  color,
  isSelected,
  ...props
}: {
  color: any;
  isSelected: boolean;
} & any) => (
  <div
    className={`flex items-center justify-center m-3 w-16 h-16 rounded-xl bg-${color} transform transition duration-500 hover:scale-125 `}
    {...props}
  >
    {isSelected ? (
      <FaCheckCircle style={{ color: '#004e66', fontSize: 20 }} />
    ) : null}
  </div>
);

export const TeamColor = () => {
  const [color, setColor] = useState();

  return (
    <div className="flex flex-row">
      {colors.map((c: any) => (
        <Circle
          onClick={() => setColor(c)}
          isSelected={color === c}
          color={c}
        />
      ))}
    </div>
  );
};

export default TeamColor;
