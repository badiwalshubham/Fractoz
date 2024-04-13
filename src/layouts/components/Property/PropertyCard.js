// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Grid from '@mui/material/Grid'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Gallery from 'src/layouts/components/Slider/Gallery'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { Chip } from '@mui/material'

// Styled Grid component
const StyledGrid = styled(Grid)(({ theme }) => ({}))

const PropertyCard = () => {
  // ** State
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Card>
      <Grid container spacing={6}>
        <StyledGrid item md={5} xs={12}>
          <CardContent>
            <Gallery />
          </CardContent>
        </StyledGrid>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            pt: ['0 !important', '0 !important', '1.5rem !important'],
            pl: ['1.5rem !important', '1.5rem !important', '0 !important']
          }}
        >
          <CardContent>
            <Typography variant='h4' sx={{ mb: 2 }}>
              Furnished Flat
            </Typography>
            <Typography variant='h2' sx={{ mb: 2 }}>
              Room and Kitchen for rent in Wagholi, Pune
            </Typography>

            <Chip label='Basic' />
            <Typography sx={{ mb: 3.5, color: 'text.secondary' }}>
              An 3 BHK flat with fully furnished rooms and hall. The flat is located in a prime location of Wagholi,
              Pune.
            </Typography>
            <Typography sx={{ fontWeight: 500, mb: 3 }}>
              Price:{' '}
              <Box component='span' sx={{ fontWeight: 'bold' }}>
                9000/Mo
              </Box>
            </Typography>
          </CardContent>
          <CardActions className='card-action-dense'>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Button variant='contained' sx={{ '& svg': { mr: 2 } }}>
                <Icon icon='tabler:360-view' fontSize={20} />
                View Property
              </Button>
              <Button variant='contained' sx={{ '& svg': { mr: 2 } }}>
                <Icon icon='tabler:album' fontSize={20} />
                Buy Property
              </Button>
              <IconButton
                id='long-button'
                aria-label='share'
                aria-haspopup='true'
                onClick={handleClick}
                aria-controls='long-menu'
                aria-expanded={open ? 'true' : undefined}
              >
                <Icon icon='tabler:share' fontSize={20} />
              </IconButton>
              <Menu
                open={open}
                id='long-menu'
                anchorEl={anchorEl}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'long-button'
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Icon icon='tabler:brand-facebook' />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Icon icon='tabler:brand-twitter' />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Icon icon='tabler:brand-linkedin' />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Icon icon='tabler:brand-google-drive' />
                </MenuItem>
              </Menu>
            </Box>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}

export default PropertyCard
