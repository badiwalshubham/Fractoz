import React from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import { CardContent, Pagination, Typography } from '@mui/material'
import SecurityIcon from '@mui/icons-material/Security'
import PoolIcon from '@mui/icons-material/Pool'
import ParkIcon from '@mui/icons-material/Park'
import Icon from 'src/@core/components/icon'

function Amenities() {
  return (
    <>
      <Card className='card2'>
        <CardHeader title='Amenities'></CardHeader>
        <CardContent>
          <Grid container>
            <Grid padding={4} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid xs={3} sx={{ textAlign: 'center' }}>
              <Icon icon='tabler:home-shield' fontSize={60} />
                <Typography variant='h5'>Securities</Typography>
              </Grid>

              <Grid xs={3} sx={{ textAlign: 'center' }}>
              <Icon icon='tabler:swimming' fontSize={60} />
                <Typography variant='h5'>Swimming Pool</Typography>
              </Grid>

              <Grid xs={3} sx={{ textAlign: 'center' }}>
              <Icon icon='tabler:trees' fontSize={60} />
                <Typography variant='h5'>Park</Typography>
              </Grid>

              <Grid xs={3}></Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default Amenities
