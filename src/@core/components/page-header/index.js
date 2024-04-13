import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import PageHeader from 'src/@core/components/page-header'

const Component = () => {
  return (
    <Grid container spacing={6}>
      <PageHeader
        title={
          <Typography variant='h5'>
            <Link href='https://github.com/facebook/react' target='_blank'>React</Link>
          </Typography>
        }
        subtitle={
          <Typography variant='body2'>
            A declarative, efficient, and flexible JavaScript library for building user interfaces.
          </Typography>
        }
      />
    </Grid>
  )
}

export default Component
