import React from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import { CardContent, Pagination, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Icon from 'src/@core/components/icon'

function Maps() {
  return (
    <>
      <Card>
        <CardHeader title='Property Location'></CardHeader>

        <CardContent>
          <Grid container>
            <Grid item xs={12}>
              <iframe
                style={{ width: '100%', maxHeight: 500, minHeight: 300,border:0 }}
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin'
                
                fullwidth='true'
                loading='lazy'
              ></iframe>
            </Grid>
            <Button variant='contained' sx={{ '& svg': { mr: 2 }, marginTop:4 }}>
                <Icon icon='tabler:gps' fontSize={27} />
                Get Directions
              </Button>
          </Grid>
          
        </CardContent>
      </Card>
    </>
  )
}

export default Maps
