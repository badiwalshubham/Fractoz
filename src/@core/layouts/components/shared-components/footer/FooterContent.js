// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

const StyledCompanyName = styled(Link)(({ theme }) => ({
  fontWeight: 500,
  textDecoration: 'none',
  color: `${theme.palette.primary.main} !important`
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: `${theme.palette.text.secondary} !important`,
  '&:hover': {
    color: `${theme.palette.primary.main} !important`
  }
}))

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery(theme => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2, display: 'flex', color: 'text.secondary' }}>
        {`© ${new Date().getFullYear()} `}
        <Box component='span' sx={{ mx: 1, color: 'error.main' }}>
          
        </Box>
        {` `}
        <Typography sx={{ ml: 1 }} target='_blank' href='https://pixinvent.com' component={StyledCompanyName}>
          {/* Pixinvent */}
        </Typography>
      </Typography>
      {hidden ? null : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', '& :not(:last-child)': { mr: 4 } }}>
          <Typography target='_blank' component={LinkStyled} href='#'>
            Rental
          </Typography>
          <Typography target='_blank' component={LinkStyled} href='#'>
            Flats
          </Typography>
          <Typography
            target='_blank'
            component={LinkStyled}
            href='#'
          >
            Homes
          </Typography>
          <Typography target='_blank' component={LinkStyled} href='#'>
            Work Places
          </Typography>
        </Box>
      )}
    </Box>
  )
}

export default FooterContent
