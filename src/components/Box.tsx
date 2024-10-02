import React, { ReactNode } from "react"

interface BoxProps {
  children: ReactNode;
}
const Box: React.FC<BoxProps> = ({children}) => {
  return (
    <div className="box">
      {children}
    </div>
  )
};

export default Box;
