import React from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import { CardContent, Pagination, Typography } from '@mui/material'

function Aboutlocation() {
  return (
    <>
      <Card className='card2'>
        <CardHeader title='About the location'></CardHeader>
        <CardContent>
          <Grid container>
            <Grid item xs={12}>
              <Typography marginTop={3} variant='h6'>
                <ul>
                  <li>
                    655 Southwest 19th Road has a Walk Score of 95 out of 100. This location is a Walker’s Paradise so
                    daily errands do not require a car.
                  </li>
                  <li>
                    655 Southwest 19th Road is a nine minute walk from the MMO METROMOVER OMNI/BRICKELL OUTER LOOP at
                    the TENTH STREET PROMANADE METROMOVER STATION stop.
                  </li>
                  <li>
                    This location is in Miami. Nearby parks include Brickell Plaza Mini Park, Brickell Park and
                    Southside Park.
                  </li>
                </ul>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default Aboutlocation
