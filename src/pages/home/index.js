// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const Home = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Property Search '></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>All type of Property</Typography>
            <Typography>
              {/* Please make sure to read our Template Documentation to understand where to go from here and how to use our
              template. */}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      

      
    </Grid>
  )
}

export default Home
