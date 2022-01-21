import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

// import { makeStyles } from '@material-ui/core';
// import { ReactComponent as Menu } from '../../icons/menu.svg';
import menu from '../../icons/menu.svg';
import hands from '../../icons/hands.png';
import legs from '../../icons/legs.png';
// import close from '../../icons/close.png';
import useStyles from './styles';
// import { makeStyles } from '@material-ui/styles';



 










// Renders out the nav categories at screen widths above 800px
const Category = ({onCategoryChange}) => {
  const handleCategoryChange = (cat) => {
    onCategoryChange(cat)

  }
  const classes = useStyles();

  //watch video on framer motion for only animate when in viewport for the bottom menu, will need to import another library and useEffect()

  return (
    <>
      {/* First ul here is the primary full screen browser version */}
      <ul className={classes.Container}>
          
        
        <motion.li className={classes.Cat}

              initial={{
                translateX: -100, 
                translateY: 0,
                opacity: 0,
              }}
              animate={{
                translateX: 0,
                translateY: 0,
                rotate: 720,
                opacity: 1,
              }}
              whileHover={{
                scale: 1.2,
                cursor: 'pointer',
                textShadow: "0px 0px 8px rgb(255,0,0, 0.5)",
              }}
              transition={{
                duration: 0.4, 
                delay: 1,
              }}
              
              onClick={() => {handleCategoryChange("Hands") }}
          >Hands 
        </motion.li>
        <li className={classes.Cat}>|</li>
        <motion.li className={classes.Cat}

              initial={{
                translateX: 0, 
                translateY: -50,
                opacity: 0,
              }}
              animate={{
                translateX: 0,
                translateY: 0,
                // rotate: 720,
                opacity: 1,
              }}
              whileHover={{
                scale: 1.2,
                cursor: 'pointer',
                textShadow: "0px 0px 8px rgb(0,0,255, 0.5)",
              }}
              transition={{
                duration: 0.8, 
                delay: 2,
              }}

              onClick={() => {handleCategoryChange("Legs") }}
            >Legs
          </motion.li>
        {/* <li className={classes.Cat}>|</li>
        <motion.li className={classes.Cat}
              whileHover={{
                scale: 1.2,
                cursor: 'pointer',
                textShadow: "0px 0px 8px rgb(0,255,0, 0.5)",
              }}
              onClick={() => {handleCategoryChange("Misc") }}
            >Misc
          </motion.li> */}
          <li className={classes.Cat}>|</li>
          <motion.li className={classes.Cat}

              initial={{
                translateX: 100, 
                translateY: 0,
                opacity: 0,
              }}
              animate={{
                translateX: 0,
                translateY: 0,
                rotate: -720,
                opacity: 1,
              }}
              whileHover={{
                scale: 1.2,
                cursor: 'pointer',
                textShadow: "0px 0px 8px rgb(149, 0, 255, 0.5)",
              }}
              transition={{
                duration: 0.5, 
                delay: 1.5,
              }}
              
              onClick={() => {handleCategoryChange("All") }}
            >All
          </motion.li>
      </ul>
         {/* Below ul list is the responsive dropdown list for screens below md breakpoint */}
        <ul className={classes.Responsive}>
            
        {/* <li className={classes.Icon}>
          <img 
            src={menu} alt="Menu"
            
            /></li> */}
        <motion.li className={classes.Cat}
        
              initial={{
                translateX: -100, 
                translateY: -50,
              }}
              animate={{
                translateX: 0,
                translateY: 0,
                rotate: 720,
              }}
              whileHover={{
                scale: 1.1,
                motionRotation: 720,
                cursor: 'pointer',
              }}
              transition={{
                duration: 0.5, 
                delay: 1,
              }}

              onClick={() => {handleCategoryChange("Hands") }}
          ><img src={hands} alt="Hands"/>
        </motion.li>
        
        <motion.li className={classes.Cat}

              initial={{
                translateX: 0,
                translateY: -50,
              }}
              animate={{
                translateX: 0,
                translateY: 0,
                rotate: 720,
              }}
              whileHover={{
                scale: 1.1,
                motionRotation: 720,
                cursor: 'pointer',
              }}
              transition={{
                duration: 0.5, delay: .7,
              }}
              onClick={() => {handleCategoryChange("Legs") }}
            ><img src={legs} alt="Legs"/>
          </motion.li>
        
        {/* <motion.li className={classes.Cat}
              whileHover={{
                scale: 1.1,
                cursor: 'pointer',
              }}
              onClick={() => {handleCategoryChange("Misc") }}
            >Misc
          </motion.li> */}
          
          <motion.li className={classes.Cat}

              initial={{
                translateX: 100,
                translateY: -50,
              }}
              animate={{
                translateX: 0,
                translateY: 0,
                rotate: 720,
              }}
              whileHover={{
                scale: 1.1,
                motionRotation: 720,
                cursor: 'pointer',
              }}
              transition={{
                duration: 0.5, 
                delay: 0.5,
              }}

              onClick={() => {handleCategoryChange("All") }}
            >All
          </motion.li>
      </ul>
 </>
  );

  
};



// const responsive = {
  
  // const Category = ({onCategoryChange}) => {
  //   const handleCategoryChange = (cat) => {
  //     onCategoryChange(cat)
  //   }
    






export default Category;