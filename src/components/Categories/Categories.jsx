import React from 'react';
import { motion } from 'framer-motion';

// import  from '../Categories/styles';

const Container = {
  display: 'flex',
  // padding: '10px',
  // justifyContent: 'space-between',
}

const Cat = {
  
  fontSize: '24px',
  display: 'flex',
  paddingLeft: '10px',
  paddingRight: '10px',
  justifyContent: 'space-between',
  

}

const Hidden = {
  display: 'none',
}


const Category = () => {

  return (
   <ul style={Container}>
     <li style={Hidden}>Categories</li>
     <motion.li style={Cat}
          whileHover={{
            scale: 1.2,
            cursor: 'pointer',
            textShadow: "0px 0px 8px rgb(255,0,0, 0.5)",
          }}
      >Hands 
     </motion.li>
     <li style={Cat}>|</li>
     <motion.li style={Cat}
          whileHover={{
            scale: 1.2,
            cursor: 'pointer',
            textShadow: "0px 0px 8px rgb(0,0,255, 0.5)",
          }}
        >Legs
      </motion.li>
     <li style={Cat}>|</li>
     <motion.li style={Cat}
          whileHover={{
            scale: 1.2,
            cursor: 'pointer',
            textShadow: "0px 0px 8px rgb(0,255,0, 0.5)",
          }}
        >Misc
      </motion.li>
   </ul>
  );

  
};


export default Category;