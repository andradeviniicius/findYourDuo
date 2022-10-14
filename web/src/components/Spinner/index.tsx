import { motion } from "framer-motion";
import React from "react";

const Spinner = ({ children }: any) => {
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
export default Spinner;
