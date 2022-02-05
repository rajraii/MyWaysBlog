import Banner from './Banner'
import Posts from './Posts'
import { Grid } from '@material-ui/core'

const Home = () => {
  return (
    <>
      <Banner />
      <Grid style={{ margin: 'auto'}} container item lg= {10} cs = {12} sm={10}>
        <Posts />
      </Grid>
    </>
  )
}

export default Home;