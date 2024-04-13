// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { Chip, Button } from '@mui/material'
import Gallery from 'src/layouts/components/Slider/Gallery'

const Relatedproperty = () => {
  return (
    <Card>
      <CardContent>
        <Gallery />
      </CardContent>
      <CardContent>
        <Typography variant='h5' sx={{ mb: 2 }}>
          Furnished Flat
        </Typography>
        <Typography variant='h4' sx={{ mb: 2 }}>
          Room and Kitchen for rent in Wagholi, Pune
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          An 3 BHK flat with fully furnished rooms and hall. The flat is located in a prime location of Wagholi, Pune.
        </Typography>

        <Typography variant='h5' marginTop={3} sx={{ mb: 2 }}>
          Basic Rent
        </Typography>

        <Typography variant='h4' marginTop={1} sx={{ mb: 2 }}>
          ₹ 19,000/ month
        </Typography>

        <Button className='pricebutton' fullWidth variant='contained' color='primary'>
          View Property
        </Button>
      </CardContent>
    </Card>
  )
}

export default Relatedproperty
