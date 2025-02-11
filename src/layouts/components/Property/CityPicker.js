import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

const city = [
    { code: 'Jp', label: 'Jaipur' },
    { code: 'Pn', label: 'Pune' }
  ]
  

function CityPicker() {
  return (
    <>
      <Autocomplete
        id='country-select-demo'
        options={city}
        autoHighlight
        getOptionLabel={option => option.label}
        renderOption={(props, option) => (
          <Box component='li' sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            <img
              loading='lazy'
              width='20'
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              alt=''
            />
            {option.label} ({option.code}) +{option.phone}
          </Box>
        )}
        renderInput={params => (
          <TextField
            {...params}
            label='City'
            fullWidth={true}
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password' // disable autocomplete and autofill
            }}
          />
        )}
      />
    </>
  )
}

export default CityPicker
