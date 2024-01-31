import { motion } from "framer-motion";
import React, { ReactElement, ReactPortal } from "react";

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = {} | ReactNodeArray;
type ReactNode =
  | ReactChild
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined;

type Props = {
  children: ReactNode;
};

const GlobalSpinner = ({ children }: Props) => {
  return (
    <>
      <motion.div
        initial={"hidden"}
        animate={"visible"}
        variants={{
          hidden: {
            opacity: 1,
          },
          visible: {
            opacity: 0,
          },
        }}
        transition={{ delay: 1 }}
        id={"globalLoader"}
      >
        <div className="loader">
          <div />
          <div />
        </div>
      </motion.div>
      {children}
    </>
  );
};
export default GlobalSpinner;
