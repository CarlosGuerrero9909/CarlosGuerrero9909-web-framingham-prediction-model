import {Container, Grid, Typography, TableContainer, Table, TableHead, TableRow, TableBody,
        TableCell, Paper} from '@mui/material'

const createData = (name, value) => {
  return {name, value}
}

export const CardiovascularRisk = ({_gender, _age, _cholesterol, _hdl, _hta, _smoker, _treatment}) => {
  const rows = [
    createData('Genero', _gender),
    createData('Edad', _age),
    createData('Colesterol Total', _cholesterol),
    createData('HDL (lipoproteínas de alta densidad)', _hdl),
    createData('HTA (hipertensión arterial )', _hta),
    createData('Fumador', _smoker),
    createData('HTA en tratamiento', _treatment),
  ];

  return (
    <Container maxWidth="sm">

      <Grid 
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >

        <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 250 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell >Datos ingresados</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>

            <Grid item>
              <Typography variant="h4" color="skyblue" gutterBottom>
                risk
              </Typography>
            </Grid>
        </Grid>

      </Grid>

    </Container>
    
  )
}
