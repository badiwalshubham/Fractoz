import React from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import { CardContent, Pagination, Typography } from '@mui/material'

function Propertydescrp() {
  return (
    <>
      <Card className='card2'>
        <CardHeader title='Description'></CardHeader>
        <CardContent>
          <Grid container>
            <Grid item xs={12}>
              <Typography marginTop={3} variant='h6'>
                <ul>
                  <li>The 2BHK Flat for rent in Balewadi, Pune</li>
                  <li>is a beautiful Semi furnished 2BHK Flat property for rent.</li>
                  <li>The property is available for Family and located at Balewadi, pune, India. </li>
                  <li>It's situated at Sai Eshanya which is at Near Aditya Breeze Park, Opposie to Kunal Aspiree.</li>
                  <li>
                    The most affordable property here is now on rent for only ₹2000/month and deposit amount of 70000
                    just once.
                  </li>
                  <li>There is no maintenance at all but there is no brokerage amount ever.</li>
                  <li>This property is 2 years old and newly built and has facilities of Car Parking.</li>
                  <li>
                    it's having a total area of 1059 sqft and 1 balconies. It is equipped with amenities like Lift,
                    Security.{' '}
                  </li>
                  <li>It's on 1st floor of the 8 floor property.</li>
                  <li>
                    The house is semi furnished with wardrobes.modular kitchen, It has easy access to market, schools,
                    hospitals, banks and ATM's as well.Looking for a apartment that is around 2,000 rupees? Then this
                    home is within your budget & is available for rent. In Balewadi this home for families comes semi
                    furnished & at a very affordable price. This 1059 sqft. home is on the 1st floor & comes with ample
                    dedicated parking area for car. This home is well equipped with 2 wardrobes & also has 2 bathrooms.
                  </li>

                  <li>
                    The house is semi furnished with wardrobes.modular kitchen, It has easy access to market, schools,
                    hospitals, banks and ATM's as well.Looking for a apartment that is around 2,000 rupees? Then this
                    home is within your budget & is available for rent. In Balewadi this home for families comes semi
                    furnished & at a very affordable price. This 1059 sqft. home is on the 1st floor & comes with ample
                    dedicated parking area for car. This home is well equipped with 2 wardrobes & also has 2 bathrooms.
                  </li>
                  <li>
                    As this home is near Dr Seema Jain's GynaeGalaxy emergency medical assistance as always available.
                    With Shanti Juniors School, Vibgyor School and The Orchid School close to this home, you'll be able
                    to provide your children with many options to choose from.
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

export default Propertydescrp
