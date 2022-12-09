import {Container, Grid, Typography, TableContainer, Table, TableHead, TableRow, TableBody,
        TableCell, Paper} from '@mui/material'
import localService from '../localServices/heartRisk'
import {Bar} from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const createData = (name, value) => {
  return {name, value}
}

const women = localService.womenData()

const men = localService.menData()

export const CardiovascularRisk = ({_gender, _age, _cholesterol, _hdl, _hta, _smoker, _treatment, _pctRisk}) => {
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
              {
                (_pctRisk >= 1 && _pctRisk <= 10) ? 
                  <>
                  <Typography variant="h5" color="#008f39" gutterBottom>
                    RIESGO MODERADO LATENTE: {_pctRisk}% en 10 años 
                  </Typography> 
                  <Statistics/>
                  </>
                  : <p></p>
              }
              {
                (_pctRisk > 10 && _pctRisk <= 20) ? 
                  <>
                  <Typography variant="h5" color="#e5be01" gutterBottom>
                    RIESGO ALTO - INTERMEDIO: {_pctRisk}% en 10 años 
                  </Typography> 
                  <Statistics/>
                  </>
                  : <p></p>
              }
              {
                (_pctRisk > 20) ? 
                  <>
                  <Typography variant="h5" color="#cb3234" gutterBottom>
                    RIESGO MUY ALTO: {_pctRisk}% en 10 años 
                  </Typography> 
                  <Statistics/>
                  </>
                  : <p></p>
              }
            </Grid>
        </Grid>

      </Grid>

    </Container>
    
  )
}

const Statistics = () => {
  return (
    <>
      <SmokerStatistics/>
      <CholesterolStatistics/>
      <HdlStatistics/>
      <HypertensiveStatistics/>
      <HtaStatistics/>
    </>
  )
}

const SmokerStatistics = () => {
  const smokersWomen = women.reduce((cont, woman) => {
    if (woman.isSmoker === "1")
      return cont+=1
    else
      return cont+=0
  }, 0)
  const noSmokersWomen = women.reduce((cont, woman) => {
    if (woman.isSmoker === "0")
      return cont+=1
    else
      return cont+=0
  }, 0)
  const smokersMen = men.reduce((cont, man) => {
    if (man.isSmoker === "1")
      return cont+=1
    else
      return cont+=0
  }, 0)
  const noSmokersMen = men.reduce((cont, man) => {
    if (man.isSmoker === "0")
      return cont+=1
    else
      return cont+=0
  }, 0)

  const data = {
    labels: ['Si', 'No'],

    datasets: [
      {
        label: 'Mujeres',
        backgroundColor: 'rgba(255,99,132,0.6)',
        borderColor: 'black',
        borderWidth: 1,
        hoverBacgroundColor: 'rgba(255,99,132,1)',
        hoverBorderColor: '#ff0000',
        data: [smokersWomen, noSmokersWomen]
      },
      {
        label: 'Hombres',
        backgroundColor: 'rgba(53,162,235,0.6)',
        borderColor: 'black',
        borderWidth: 1,
        hoverBacgroundColor: 'rgba(53,162,235,1)',
        hoverBorderColor: '#0000ff',
        data: [smokersMen, noSmokersMen]
      },

    ]
  }

  const opciones = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Fumadores',
      },
    }
  }

  return (
    <div style={{width: '100%', height: '300px'}}>
      <Bar data={data} options={opciones}/>
    </div>
  )
}

const HypertensiveStatistics = () => {
  const hypertensiveWomen = women.reduce((cont, woman) => {
    if (woman.isHypertensive === "1")
      return cont+=1
    else
      return cont+=0
  }, 0)
  const noHypertensiveWomen = women.reduce((cont, woman) => {
    if (woman.isHypertensive === "0")
      return cont+=1
    else
      return cont+=0
  }, 0)
  const hypertensiveMen = men.reduce((cont, man) => {
    if (man.isHypertensive === "1")
      return cont+=1
    else
      return cont+=0
  }, 0)
  const noHypertensiveMen = men.reduce((cont, man) => {
    if (man.isHypertensive === "0")
      return cont+=1
    else
      return cont+=0
  }, 0)

  const data = {
    labels: ['Si', 'No'],

    datasets: [
      {
        label: 'Mujeres',
        backgroundColor: 'rgba(255,99,132,0.6)',
        borderColor: 'black',
        borderWidth: 1,
        hoverBacgroundColor: 'rgba(255,99,132,1)',
        hoverBorderColor: '#ff0000',
        data: [hypertensiveWomen, noHypertensiveWomen]
      },
      {
        label: 'Hombres',
        backgroundColor: 'rgba(53,162,235,0.6)',
        borderColor: 'black',
        borderWidth: 1,
        hoverBacgroundColor: 'rgba(53,162,235,1)',
        hoverBorderColor: '#0000ff',
        data: [hypertensiveMen, noHypertensiveMen]
      },

    ]
  }

  const opciones = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Hipertensos',
      },
    }
  }

  return (
    <div style={{width: '100%', height: '300px'}}>
      <Bar data={data} options={opciones}/>
    </div>
  )
}

const CholesterolStatistics = () => {
  const cholesterolWomen130a137 = women.reduce((cont, woman) => {
    if (parseInt(woman.Cholesterol) >= 130 && parseInt(woman.Cholesterol) < 137)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const cholesterolMen130a137 = men.reduce((cont, men) => {
    if (parseInt(men.Cholesterol) >= 130 && parseInt(men.Cholesterol) < 137)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const cholesterolWomen137a144 = women.reduce((cont, woman) => {
    if (parseInt(woman.Cholesterol) >= 137 && parseInt(woman.Cholesterol) < 144)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const cholesterolMen137a144 = men.reduce((cont, men) => {
    if (parseInt(men.Cholesterol) >= 137 && parseInt(men.Cholesterol) < 144)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const cholesterolWomen144a151 = women.reduce((cont, woman) => {
    if (parseInt(woman.Cholesterol) >= 144 && parseInt(woman.Cholesterol) < 151)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const cholesterolMen144a151 = men.reduce((cont, men) => {
    if (parseInt(men.Cholesterol) >= 144 && parseInt(men.Cholesterol) < 151)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const cholesterolWomen151a158 = women.reduce((cont, woman) => {
    if (parseInt(woman.Cholesterol) >= 151 && parseInt(woman.Cholesterol) < 158)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const cholesterolMen151a158 = men.reduce((cont, men) => {
    if (parseInt(men.Cholesterol) >= 151 && parseInt(men.Cholesterol) < 158)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const cholesterolWomen158a165 = women.reduce((cont, woman) => {
    if (parseInt(woman.Cholesterol) >= 158 && parseInt(woman.Cholesterol) < 165)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const cholesterolMen158a165 = men.reduce((cont, men) => {
    if (parseInt(men.Cholesterol) >= 158 && parseInt(men.Cholesterol) < 165)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const cholesterolWomen165a172 = women.reduce((cont, woman) => {
    if (parseInt(woman.Cholesterol) >= 165 && parseInt(woman.Cholesterol) < 172)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const cholesterolMen165a172 = men.reduce((cont, men) => {
    if (parseInt(men.Cholesterol) >= 165 && parseInt(men.Cholesterol) < 172)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const cholesterolWomen172a179 = women.reduce((cont, woman) => {
    if (parseInt(woman.Cholesterol) >= 172 && parseInt(woman.Cholesterol) < 179)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const cholesterolMen172a179 = men.reduce((cont, men) => {
    if (parseInt(men.Cholesterol) >= 172 && parseInt(men.Cholesterol) < 179)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const cholesterolWomen179a186 = women.reduce((cont, woman) => {
    if (parseInt(woman.Cholesterol) >= 179 && parseInt(woman.Cholesterol) < 186)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const cholesterolMen179a186 = men.reduce((cont, men) => {
    if (parseInt(men.Cholesterol) >= 179 && parseInt(men.Cholesterol) < 186)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const cholesterolWomen186a193 = women.reduce((cont, woman) => {
    if (parseInt(woman.Cholesterol) >= 186 && parseInt(woman.Cholesterol) < 193)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const cholesterolMen186a193 = men.reduce((cont, men) => {
    if (parseInt(men.Cholesterol) >= 186 && parseInt(men.Cholesterol) < 193)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const cholesterolWomen193a200 = women.reduce((cont, woman) => {
    if (parseInt(woman.Cholesterol) >= 193 && parseInt(woman.Cholesterol) < 200)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const cholesterolMen193a200 = men.reduce((cont, men) => {
    if (parseInt(men.Cholesterol) >= 193 && parseInt(men.Cholesterol) < 200)
      return cont+=1
    else
      return cont+=0
  }, 0)

  const data = {
    labels: ['130-137', '137-144', '144-151', '151-158', '158-165', '165-172', '172-179', '179-186', '186-193', '193-200'],

    datasets: [
      {
        label: 'Mujeres',
        backgroundColor: 'rgba(255,99,132,0.6)',
        borderColor: 'black',
        borderWidth: 1,
        hoverBacgroundColor: 'rgba(255,99,132,1)',
        hoverBorderColor: '#ff0000',
        data: [cholesterolWomen130a137,cholesterolWomen137a144,cholesterolWomen144a151,cholesterolWomen151a158,cholesterolWomen158a165,cholesterolWomen165a172,cholesterolWomen172a179,cholesterolWomen179a186,cholesterolWomen186a193,cholesterolWomen193a200]
      },
      {
        label: 'Hombres',
        backgroundColor: 'rgba(53,162,235,0.6)',
        borderColor: 'black',
        borderWidth: 1,
        hoverBacgroundColor: 'rgba(53,162,235,1)',
        hoverBorderColor: '#0000ff',
        data: [cholesterolMen130a137,cholesterolMen137a144,cholesterolMen144a151,cholesterolMen151a158,cholesterolMen158a165,cholesterolMen165a172,cholesterolMen172a179,cholesterolMen179a186,cholesterolMen186a193,cholesterolMen193a200]
      },

    ]
  }

  const opciones = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Colesterol',
      },
    }
  }

  return (
    <div style={{width: '100%', height: '300px'}}>
      <Bar data={data} options={opciones}/>
    </div>
  )
}

const HdlStatistics = () => {
  const hdlWomen20a28 = women.reduce((cont, woman) => {
    if (parseInt(woman.HDL) >= 20 && parseInt(woman.HDL) < 28)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const hdlMen20a28 = men.reduce((cont, men) => {
    if (parseInt(men.HDL) >= 20 && parseInt(men.HDL) < 28)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const hdlWomen28a36 = women.reduce((cont, woman) => {
    if (parseInt(woman.HDL) >= 28 && parseInt(woman.HDL) < 36)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const hdlMen28a36 = men.reduce((cont, men) => {
    if (parseInt(men.HDL) >= 28 && parseInt(men.HDL) < 36)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const hdlWomen36a44 = women.reduce((cont, woman) => {
    if (parseInt(woman.HDL) >= 36 && parseInt(woman.HDL) < 44)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const hdlMen36a44 = men.reduce((cont, men) => {
    if (parseInt(men.HDL) >= 36 && parseInt(men.HDL) < 44)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const hdlWomen44a52 = women.reduce((cont, woman) => {
    if (parseInt(woman.HDL) >= 44 && parseInt(woman.HDL) < 52)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const hdlMen44a52 = men.reduce((cont, men) => {
    if (parseInt(men.HDL) >= 44 && parseInt(men.HDL) < 52)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const hdlWomen52a60 = women.reduce((cont, woman) => {
    if (parseInt(woman.HDL) >= 52 && parseInt(woman.HDL) < 60)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const hdlMen52a60 = men.reduce((cont, men) => {
    if (parseInt(men.HDL) >= 52 && parseInt(men.HDL) < 60)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const hdlWomen60a68 = women.reduce((cont, woman) => {
    if (parseInt(woman.HDL) >= 60 && parseInt(woman.HDL) < 68)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const hdlMen60a68 = men.reduce((cont, men) => {
    if (parseInt(men.HDL) >= 60 && parseInt(men.HDL) < 68)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const hdlWomen68a76 = women.reduce((cont, woman) => {
    if (parseInt(woman.HDL) >= 68 && parseInt(woman.HDL) < 76)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const hdlMen68a76 = men.reduce((cont, men) => {
    if (parseInt(men.HDL) >= 68 && parseInt(men.HDL) < 76)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const hdlWomen76a84 = women.reduce((cont, woman) => {
    if (parseInt(woman.HDL) >= 76 && parseInt(woman.HDL) < 84)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const hdlMen76a84 = men.reduce((cont, men) => {
    if (parseInt(men.HDL) >= 76 && parseInt(men.HDL) < 84)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const hdlWomen84a92 = women.reduce((cont, woman) => {
    if (parseInt(woman.HDL) >= 84 && parseInt(woman.HDL) < 92)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const hdlMen84a92 = men.reduce((cont, men) => {
    if (parseInt(men.HDL) >= 84 && parseInt(men.HDL) < 92)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const hdlWomen92a100 = women.reduce((cont, woman) => {
    if (parseInt(woman.HDL) >= 92 && parseInt(woman.HDL) < 100)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const hdlMen92a100 = men.reduce((cont, men) => {
    if (parseInt(men.HDL) >= 92 && parseInt(men.HDL) < 100)
      return cont+=1
    else
      return cont+=0
  }, 0)

  const data = {
    labels: ['130-137', '137-144', '144-151', '151-158', '158-165', '165-172', '172-179', '179-186', '186-193', '193-200'],

    datasets: [
      {
        label: 'Mujeres',
        backgroundColor: 'rgba(255,99,132,0.6)',
        borderColor: 'black',
        borderWidth: 1,
        hoverBacgroundColor: 'rgba(255,99,132,1)',
        hoverBorderColor: '#ff0000',
        data: [hdlWomen20a28,hdlWomen28a36,hdlWomen36a44,hdlWomen44a52,hdlWomen52a60,hdlWomen60a68,hdlWomen68a76,hdlWomen76a84,hdlWomen84a92,hdlWomen92a100]
      },
      {
        label: 'Hombres',
        backgroundColor: 'rgba(53,162,235,0.6)',
        borderColor: 'black',
        borderWidth: 1,
        hoverBacgroundColor: 'rgba(53,162,235,1)',
        hoverBorderColor: '#0000ff',
        data: [hdlMen20a28,hdlMen28a36,hdlMen36a44,hdlMen44a52,hdlMen52a60,hdlMen60a68,hdlMen68a76,hdlMen76a84,hdlMen84a92,hdlMen92a100]
      },

    ]
  }

  const opciones = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'HDL',
      },
    }
  }

  return (
    <div style={{width: '100%', height: '300px'}}>
      <Bar data={data} options={opciones}/>
    </div>
  )
}

const HtaStatistics = () => {
  const htaWomen90a101 = women.reduce((cont, woman) => {
    if (parseInt(woman.Systolic) >= 90 && parseInt(woman.Systolic) < 101)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const htaMen90a101 = men.reduce((cont, men) => {
    if (parseInt(men.Systolic) >= 90 && parseInt(men.Systolic) < 101)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const htaWomen101a112 = women.reduce((cont, woman) => {
    if (parseInt(woman.Systolic) >= 101 && parseInt(woman.Systolic) < 112)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const htaMen101a112 = men.reduce((cont, men) => {
    if (parseInt(men.Systolic) >= 101 && parseInt(men.Systolic) < 112)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const htaWomen112a123 = women.reduce((cont, woman) => {
    if (parseInt(woman.Systolic) >= 112 && parseInt(woman.Systolic) < 123)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const htaMen112a123 = men.reduce((cont, men) => {
    if (parseInt(men.Systolic) >= 112 && parseInt(men.Systolic) < 123)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const htaWomen123a134 = women.reduce((cont, woman) => {
    if (parseInt(woman.Systolic) >= 123 && parseInt(woman.Systolic) < 134)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const htaMen123a134 = men.reduce((cont, men) => {
    if (parseInt(men.Systolic) >= 123 && parseInt(men.Systolic) < 134)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const htaWomen134a145 = women.reduce((cont, woman) => {
    if (parseInt(woman.Systolic) >= 134 && parseInt(woman.Systolic) < 145)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const htaMen134a145 = men.reduce((cont, men) => {
    if (parseInt(men.Systolic) >= 134 && parseInt(men.Systolic) < 145)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const htaWomen145a156 = women.reduce((cont, woman) => {
    if (parseInt(woman.Systolic) >= 145 && parseInt(woman.Systolic) < 156)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const htaMen145a156 = men.reduce((cont, men) => {
    if (parseInt(men.Systolic) >= 145 && parseInt(men.Systolic) < 156)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const htaWomen156a167 = women.reduce((cont, woman) => {
    if (parseInt(woman.Systolic) >= 156 && parseInt(woman.Systolic) < 167)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const htaMen156a167 = men.reduce((cont, men) => {
    if (parseInt(men.Systolic) >= 156 && parseInt(men.Systolic) < 167)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const htaWomen167a178 = women.reduce((cont, woman) => {
    if (parseInt(woman.Systolic) >= 167 && parseInt(woman.Systolic) < 178)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const htaMen167a178 = men.reduce((cont, men) => {
    if (parseInt(men.Systolic) >= 167 && parseInt(men.Systolic) < 178)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const htaWomen178a189 = women.reduce((cont, woman) => {
    if (parseInt(woman.Systolic) >= 178 && parseInt(woman.Systolic) < 189)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const htaMen178a189 = men.reduce((cont, men) => {
    if (parseInt(men.Systolic) >= 178 && parseInt(men.Systolic) < 189)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const htaWomen189a200 = women.reduce((cont, woman) => {
    if (parseInt(woman.Systolic) >= 189 && parseInt(woman.Systolic) < 200)
      return cont+=1
    else
      return cont+=0
  }, 0)
  const htaMen189a200 = men.reduce((cont, men) => {
    if (parseInt(men.Systolic) >= 189 && parseInt(men.Systolic) < 200)
      return cont+=1
    else
      return cont+=0
  }, 0)

  const data = {
    labels: ['130-137', '137-144', '144-151', '151-158', '158-165', '165-172', '172-179', '179-186', '186-193', '193-200'],

    datasets: [
      {
        label: 'Mujeres',
        backgroundColor: 'rgba(255,99,132,0.6)',
        borderColor: 'black',
        borderWidth: 1,
        hoverBacgroundColor: 'rgba(255,99,132,1)',
        hoverBorderColor: '#ff0000',
        data: [htaWomen90a101,htaWomen101a112,htaWomen112a123,htaWomen123a134,htaWomen134a145,htaWomen145a156,htaWomen156a167,htaWomen167a178,htaWomen178a189,htaWomen189a200]
      },
      {
        label: 'Hombres',
        backgroundColor: 'rgba(53,162,235,0.6)',
        borderColor: 'black',
        borderWidth: 1,
        hoverBacgroundColor: 'rgba(53,162,235,1)',
        hoverBorderColor: '#0000ff',
        data: [htaMen90a101,htaMen101a112,htaMen112a123,htaMen123a134,htaMen134a145,htaMen145a156,htaMen156a167,htaMen167a178,htaMen178a189,htaMen189a200]
      },

    ]
  }

  const opciones = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Tension (HTA)',
      },
    }
  }

  return (
    <div style={{width: '100%', height: '300px'}}>
      <Bar data={data} options={opciones}/>
    </div>
  )
}
