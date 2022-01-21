import { makeStyles } from '@material-ui/core/styles';



export default makeStyles((theme) => ({

  
// we have to give each cat an ID to make styling react normally to hover states.
  Cat: {
    fontSize: '24px',
    display: 'flex',
    paddingLeft: '10px',
    paddingRight: '10px',
    justifyContent: 'space-between',
    textShadow: 'none',
    

    // '&:hover': {
    //   cursor: 'pointer',
    //   scale: '1.2',   
    //   textShadow: "0px 0px 8px rgb(0,0,255, 0.5)",
      
    // },
    
    [theme.breakpoints.down('sm')]: {
      float: 'left',
      paddingLeft: '0px',
      paddingRight: '2px',
      fontSize: '22px',

      '&:hover': {
        cursor: 'pointer',
        transform: 'rotate(180deg)',
        transitionProperty: 'transform',
        
      },
    },

    
   
  },
  
  Container: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
            display: 'none',
          },
  },


  Responsive: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
            display: 'flex',
            
          },
  
  },

  Icon: {
     
    // display: 'none',
    // backgroundColor: 'rgb(150, 250, 198, 0.5)',
    // borderRadius: '20%',
    // transitionDuration: '200ms',
    
    // '&:hover': {
    //   cursor: 'pointer',
    //   transform: 'rotate(180deg)',
    //   transitionProperty: 'transform backgroundColor',
    //   backgroundColor: 'rgb(2, 116, 245, 0.4)',
    //   filter: 'brightness(1.2)',
    // },

  },





}));


//Still to do: 





// Import the close PNG 
// Watch vid and notes on making the dropdown menu
// after getting the styling down, translations, etc. focus on making an onclick listener to change the menu SVG into the Close PNG...toggle drop down menu to open close accordingly.

// put the onclick attribute in the ul in order to make the changes. 

