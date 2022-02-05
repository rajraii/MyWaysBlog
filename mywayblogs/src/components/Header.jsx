import { AppBar, Toolbar, Typography, makeStyles} from "@material-ui/core";

const useStyles = makeStyles ({
  component : {
    background : '#fff',
    color : '#0a0a0a',
  },
  container : {
    justifyContent : 'center',
    '& > *' : {
      padding : 20,
    }
  },
})

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.component}>
      <Toolbar className={classes.container}>
        <Typography>Home</Typography>
        <Typography>Read</Typography>
        <Typography>Write</Typography>
        <Typography>Search</Typography>
        <Typography>Login</Typography>

      </Toolbar>
    </AppBar>
  )
}

export default Header;


