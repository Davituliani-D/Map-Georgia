import React from "react";
import classes from "./TbilisiMap.module.css";
import { motion } from "framer-motion";

const TbilisiMap = () => {
  return (
    <svg>
      <motion.path
        whileHover={{ scale: 1.1 }}
        className={classes.partTbilisi}
        d="M730.8 366.9l-4.3 4.2-0.4 3.4 2.9 2.7 1 3.5 0.7 3.4 2.3 2.1 2.6 1.3 3.5 0.9 3.4-0.9 1.9-2.8 2.4-1.9 1.5 4.9-4.3 6.2-5.6 1.9-5.7-0.4-4.3-2.1-3.6-0.9-3.7-0.3-12.1-6.3-4.4 0.2-2.1-2.7-0.4-2.8-2.7-0.8 1.8-3.2 2.9-1.2 3-6.8 4.3 0.1 4.2-2.7 2.3-4.1 3.8 0.3 9.1 4.8z"
      />
    </svg>
  );
};

export default TbilisiMap;
