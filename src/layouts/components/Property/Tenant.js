import React from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import { CardContent, Pagination, Typography } from '@mui/material'
import Icon from 'src/@core/components/icon'


function Tenant() {
  return (
    <>
      <Card className='card2'>
        <CardHeader title='Tenant Types'></CardHeader>
        <CardContent>
          <Grid padding={4} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid xs={3} sx={{ textAlign: 'center' }}>
              <Icon icon='tabler:school' fontSize={60} />
              <Typography variant='h5'>Bachlors</Typography>
            </Grid>

            <Grid xs={3} sx={{ textAlign: 'center' }}>
              <Icon icon='tabler:gender-male' fontSize={60} />
              <Typography variant='h5'>Male</Typography>
            </Grid>

            <Grid xs={3} sx={{ textAlign: 'center' }}>
              <Icon icon='tabler:gender-female' fontSize={60} />
              <Typography variant='h5'>Female</Typography>
            </Grid>

            <Grid xs={3}></Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default Tenant
