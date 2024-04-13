// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Slider from '@mui/material/Slider'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Grid from '@mui/material/Grid'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { Chip, Button } from '@mui/material'
import CityPicker from '../Property/CityPicker'

// Styled Grid component
const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  [theme.breakpoints.up('md')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

const FilterCard = () => {
  // ** State
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const valuetext = value => {
    return { value }
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Filters'></CardHeader>
          <CardContent>
            <Grid container spacing={6}>
              {/* Location */}
              <Grid item xs={12}>
                <Typography variant='subtitle'>Location</Typography>
              </Grid>
              <Grid item xs={12}>
                <CityPicker />
              </Grid>

              {/* Price Range */}
              <Grid item xs={12}>
                <Typography variant='subtitle'>Price Range</Typography>
              </Grid>
              <Grid item xs={12}>
                <Slider
                  marks
                  step={10}
                  defaultValue={20}
                  valueLabelDisplay='auto'
                  getAriaValueText={valuetext}
                  aria-labelledby='small-steps-slider'
                />
              </Grid>

              {/* Tenant Type */}
              <Grid item xs={12}>
                <Typography variant='subtitle'>Tenant Type</Typography>
                <FormGroup row>
                  <FormControlLabel label='Family' control={<Checkbox name='basic-checked' />} />
                  <FormControlLabel label='Working' control={<Checkbox name='basic-unchecked' />} />
                  <FormControlLabel label='Bachelors' control={<Checkbox name='basic-unchecked' />} />
                  <FormControlLabel label='Company' control={<Checkbox name='basic-unchecked' />} />
                </FormGroup>
              </Grid>

              {/* Rental Type */}
              <Grid item xs={12}>
                <Typography variant='title'>Rental Type</Typography>
                <FormGroup row>
                  <FormControlLabel label='1 BHK' control={<Checkbox name='basic-checked' />} />
                  <FormControlLabel label='2 BHK' control={<Checkbox name='basic-unchecked' />} />
                  <FormControlLabel label='3 BHK' control={<Checkbox name='basic-unchecked' />} />
                  <FormControlLabel label='4 BHK' control={<Checkbox name='basic-unchecked' />} />
                  <FormControlLabel label='4+ BHK' control={<Checkbox name='basic-unchecked' />} />
                  <FormControlLabel label='Room + Kitchen' control={<Checkbox name='basic-unchecked' />} />
                </FormGroup>
              </Grid>

              {/* Furnishing */}
              <Grid item xs={12}>
                <Typography variant='title'>Furnishing</Typography>
                <FormGroup row>
                  <FormControlLabel label='Furnished' control={<Checkbox name='basic-checked' />} />
                  <FormControlLabel label='Unfurnished' control={<Checkbox name='basic-unchecked' />} />
                  <FormControlLabel label='Semi furnished' control={<Checkbox name='basic-unchecked' />} />
                </FormGroup>
              </Grid>

              {/* Apply Button */}
              <Grid item xs={12}>
                <Button fullWidth variant='contained' color='primary'>
                  Apply Filters
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default FilterCard
