import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container : {
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin : 10,
    borderRadius: 10,
    border: '1px solid #000',
    justifyContent: 'center',
    '&>*':{
      padding: '0 5px 5px 5px',
    }
  },
  image : {
    height: 150,
    width: '80%',
    objectFit: 'cover',
    borderRadius: 8,
  },
  text : {
    color : '#878787',
    fontSize: 12,
  },
  heading :{
    fontSize: 18,
  },
  detail :{
    fontSize: 14,
    wordBreak: 'break-word',
    
  }
})

const Post = () => {
  const classes =  useStyles();
  const url = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';
  return (
    <>
      <Box className={classes.container}>
        <img src={url} alt="Post Image" className={classes.image}/>
        <Typography className={classes.heading}>Getting Started</Typography>
        <Typography className={classes.text}>My Way Blogs</Typography>
        <Typography className={classes.detail}>Hi Lets Get started</Typography>
      </Box>
    </>
  )
}

export default Post;