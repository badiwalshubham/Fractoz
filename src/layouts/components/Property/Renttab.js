import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import { CardContent, Pagination, Typography } from '@mui/material'

function createData(name, calories) {
  return { name, calories }
}

const rows = [
  createData('Base Rent', 2000),
  createData('Security Deposit', 70000),
  createData('Maintenance', 'None'),
  createData('Rent Negotiable', 'Non Negotiable')
]

export default function Renttab() {
  return (
    <Card>
      <CardHeader title='Rent Details'></CardHeader>

      <CardContent>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>Rent Type </TableCell>
                    <TableCell align='right'>Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component='th' scope='row'>
                        {row.name}
                      </TableCell>
                      <TableCell align='right'>{row.calories}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
      </CardContent>
    </Card>
  )
}
