import React from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import { CardContent, Pagination, Typography } from '@mui/material'
import Icon from 'src/@core/components/icon'
import CustomChip from 'src/@core/components/mui/chip'
import Chip from '@mui/material/Chip'
import { fontSize } from '@mui/system'

function Propertydetail() {
  return (
    <>
      <Card className='card2'>
        <CardHeader title='Property Details'></CardHeader>
        <CardContent>
          <Grid xs={12}>
            <Typography marginTop={3} variant='h5' sx={{ margin: 3 }}>
              <span className='dummybtn'>Available Date: Wed May 2023</span>
            </Typography>

            <div className='chipContainer'>
              <Chip
                label='Semi Furnished'
                color='primary'
                sx={{ fontWeight: 35, fontSize: 18, blockSize: 50, margin: 3 }}
              />
              <Chip label='1 Balcony' color='primary' sx={{ fontWeight: 35, fontSize: 18, blockSize: 50, margin: 3 }} />
              <Chip label='2 BHK' color='primary' sx={{ fontWeight: 35, fontSize: 18, blockSize: 50, margin: 3 }} />
              <Chip
                label='Well Equipped'
                color='primary'
                sx={{ fontWeight: 35, fontSize: 18, blockSize: 50, margin: 3 }}
              />
              <Chip
                label='Car Parking'
                color='primary'
                sx={{ fontWeight: 35, fontSize: 18, blockSize: 50, margin: 3 }}
              />
            </div>
            <Typography variant='h4' sx={{ mb: 2, margin: 4 }}>
                Floor: 2nd | Total Floor: 8
              </Typography>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default Propertydetail
