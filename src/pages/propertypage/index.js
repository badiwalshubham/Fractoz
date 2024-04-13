// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import Gallery from 'src/layouts/components/Slider/Gallery'
import Cardslider from 'src/layouts/components/Slider/Cardslider'
import Propertydetail from 'src/layouts/components/Property/Propertydetail'
import Amenities from 'src/layouts/components/Property/Amenities'
import { CardContent, Pagination, Typography } from '@mui/material'
import { Chip, Button } from '@mui/material'
import Propertydescrp from 'src/layouts/components/Property/Propertydescrp'
import Maps from 'src/layouts/components/Property/Maps'
import Faq from 'src/layouts/components/Property/Faq'
import Relatedproperty from 'src/layouts/components/Property/Relatedproperty'
import Renttab from 'src/layouts/components/Property/Renttab'
import Tenant from 'src/layouts/components/Property/Tenant'
import Walkscore from 'src/layouts/components/Property/walkscore'
import Aboutlocation from 'src/layouts/components/Property/Aboutlocation'
import Cardslider2 from 'src/layouts/components/Slider/Cardslider2'

const Home = () => {
  return (
    <Grid container spacing={9}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Featured Property'></CardHeader>
          <CardContent>
            <Grid container spacing={12}>
              {/* Image Slider */}
              <Grid item xs={5}>
                <Gallery />
              </Grid>

              {/* Title and type of property */}
              <Grid item xs={7}>
                <Typography variant='h2' marginTop={1}>
                  Independent House for Rent
                </Typography>
                <Typography variant='h4' marginTop={1}>
                  Standalone Building
                </Typography>

                {/* Rent Tab */}
                <Card className='card1'>
                  <CardContent>
                    <Grid container>
                      <Grid item xs={8}>
                        <Typography variant='h5'>Basic Rent</Typography>
                        <Typography variant='h4' marginTop={1}>
                          ₹ 19,000/ month
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Button className='pricebutton' fullWidth variant='outlined'>
                          See all Prices
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>

                {/* View Button */}
                <Grid item xs={12} sx={{ alignItems: 'center' }} marginTop={7}>
                  <Button fullWidth variant='contained' color='primary'>
                    Visit Property
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* Property Details */}
      <Grid item xs={12}>
        <Renttab />
      </Grid>

      {/* Property Details */}
      <Grid item xs={12}>
        <Propertydetail />
      </Grid>

      {/* Tenant */}
      <Grid item xs={12}>
        <Tenant />
      </Grid>

      {/* Aemities */}
      <Grid item xs={12}>
        <Amenities />
      </Grid>

      {/* Aemities */}
      <Grid item xs={12}>
        <Propertydescrp />
      </Grid>

      <Grid item xs={12}>
        <Walkscore />
      </Grid>

      <Grid item xs={12}>
        <Maps />
      </Grid>

      <Grid item xs={12}>
        <Aboutlocation />
      </Grid>

      <Grid item xs={12}>
        <Cardslider2 />
      </Grid>

      <Grid item xs={12}>
        <Faq />
      </Grid>

      <Grid item xs={12}>
        <Cardslider />
      </Grid>
    </Grid>
  )
}

export default Home
