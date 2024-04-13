// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import PropertyCard from 'src/layouts/components/Property/PropertyCard'
import { Pagination, Typography } from '@mui/material'
import FilterCard from 'src/layouts/components/Filter/FilterCard'

const Home = () => {
  return (
    <Grid container spacing={9}>
      <Grid item xs={4}>
      </Grid>
      <Grid item xs={8}>
        <Typography variant='body2'>You are viewing 123 results</Typography>
      </Grid>
      {/* Property Data */}
      <Grid item xs={4}>
        <FilterCard />
      </Grid>
      <Grid item xs={8}>
        <PropertyCard />
      </Grid>
      {/* Pagination */}
      <Grid item sx={{ alignItems: 'center' }} xs={12} className='pagination'>
        <Pagination count={10} />
      </Grid>
    </Grid>
  )
}

export default Home
