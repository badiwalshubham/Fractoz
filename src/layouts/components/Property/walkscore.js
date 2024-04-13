// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Button from '@mui/material/Button'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Icon from 'src/@core/components/icon'

const Walkscore = () => {
  // ** State
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card>
        <Typography variant='h4' sx={{ mb: 4, ml: 5, mt: 5 }}>
        Scores
      </Typography>
     
      <Typography variant='h5' sx={{ mb: 4, ml: 5 }}>
        Neighborhood: Brickell
      </Typography>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label='card navigation example' sx={{ '& .MuiTab-root': { py: 3.5 } }}>
          <Tab value='1' label='Walk Score' />
          <Tab value='2' label='Transit Score' />
          <Tab value='3' label='Bike Score' />
        </TabList>
        <CardContent>
          <TabPanel value='1' sx={{ p: 0 }}>
            <div className='flex'>
              <Icon icon='tabler:walk' fontSize={45} />
              <Typography variant='h3' sx={{ mb: 4, ml: 2, mt: 1 }}>
                95/100
              </Typography>
              <Typography variant='h4' sx={{ mb: 4, ml: 2, mt: 2 }}>
                (Walker's Paradise)
              </Typography>
            </div>

            <Typography sx={{ mb: 4, color: 'text.secondary' }}>
              Walk Score measures the walkability of any address based on the distance to nearby places and pedestrian
              friendliness.
            </Typography>
          </TabPanel>
          <TabPanel value='2' sx={{ p: 0 }}>
            <div className='flex'>
              <Icon icon='tabler:bus' fontSize={45} />
              <Typography variant='h3' sx={{ mb: 4, ml: 2, mt: 1 }}>
                89/100
              </Typography>
              <Typography variant='h4' sx={{ mb: 4, ml: 2, mt: 2 }}>
                (Excellent Transit)
              </Typography>
            </div>

            <Typography sx={{ mb: 4, color: 'text.secondary' }}>
              Transit Score measures how well a location is served by public transit based on the distance and type of
              nearby transit lines.
            </Typography>
          </TabPanel>

          <TabPanel value='3' sx={{ p: 0 }}>
            <div className='flex'>
              <Icon icon='tabler:bike' fontSize={45} />
              <Typography variant='h3' sx={{ mb: 4, ml: 2, mt: 1 }}>
                63/100
              </Typography>
              <Typography variant='h4' sx={{ mb: 4, ml: 2, mt: 2 }}>
                (Bikeable)
              </Typography>
            </div>

            <Typography sx={{ mb: 4, color: 'text.secondary' }}>
              Bike Score measures whether an area is good for biking based on bike lanes and trails, hills, road
              connectivity, and destinations.
            </Typography>
          </TabPanel>
        </CardContent>
      </TabContext>
    </Card>
  )
}

export default Walkscore
