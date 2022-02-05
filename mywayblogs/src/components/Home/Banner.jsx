import { makeStyles, Box, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  image : {
    background :  `url( ${'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?cs=srgb&dl=pexels-janko-ferlic-590493.jpg&fm=jpg'}) center  #000`,
    width: '100%',
    height: '50vh',
    display : 'flex',
    justifyContent : 'center',
    alignItems: 'center',
    '&>*':{
      color: '#fafafa',
      fontSize: 50,
    }
  }
});

const Banner = () =>{
  const classes = useStyles();
  return (
    <Box className = {classes.image}>
      <Typography>My Way Blogs</Typography>
    </Box>
  )
}

export default Banner;