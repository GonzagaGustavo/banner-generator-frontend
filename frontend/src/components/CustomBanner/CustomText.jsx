import { MenuItem, Select } from '@mui/material'
import React from 'react'

function CustomText() {
  return (
    <div>
        <Select value={20}>
            <MenuItem value={20}>20</MenuItem>
        </Select>
    </div>
  )
}

export default CustomText