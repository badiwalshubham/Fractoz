// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'

// Styled Grid component
const StyledGrid1 = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  [theme.breakpoints.down('md')]: {
    paddingTop: '0 !important'
  },
  '& .MuiCardContent-root': {
    padding: theme.spacing(3, 4.75),
    [theme.breakpoints.down('md')]: {
      paddingTop: 0
    }
  }
}))

// Styled Grid component
const StyledGrid2 = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    paddingLeft: '0 !important'
  },
  [theme.breakpoints.down('md')]: {
    order: -1
  }
}))

// Styled component for the image
const Img = styled('img')(({ theme }) => ({
  height: '11rem',
  borderRadius: theme.shape.borderRadius
}))

const Neararea = () => {
  return (
    <Card className='cardcolor' >
      {/* <CardHeader title='Near By Areas'></CardHeader> */}
      <Grid container spacing={6} padding={1} >
        <StyledGrid1 item xs={12} md={6} lg={7} >
          <CardContent>
            <Typography variant='h5' sx={{ mb: 2 }}>
              Southside Elementary School
            </Typography>
            <Box sx={{ mb: 4.75, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
              <Rating readOnly value={5} name='read-only' sx={{ mr: 2 }} />
              <Typography sx={{ color: 'text.secondary' }}>5 Star | 98 reviews</Typography>
            </Box>
            <Typography sx={{ mb: 4, color: 'text.secondary' }}>Grades: PK-5 Distance: 0.3 mi</Typography>
          </CardContent>
          <CardActions className='card-action-dense' sx={{ width: '100%' }}>
            <Button>Location</Button>
            <Button>Reviews</Button>
          </CardActions>
        </StyledGrid1>
        <StyledGrid2 item xs={12} md={6} lg={5}></StyledGrid2>
      </Grid>
    </Card>
  )
}

export default Neararea
