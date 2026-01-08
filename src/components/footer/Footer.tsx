import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer: React.FC = () => (
  <Box
    sx={{
      width: '100%',
      height: 100,
      backgroundColor: 'primary.main',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    }}>
    <Typography variant='body1'>
      &copy; {new Date().getFullYear()} ITGalkowski. All rights reserved.
    </Typography>
  </Box>
)

export default Footer
