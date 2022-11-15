import {Container, Grid, Autocomplete, TextField, InputAdornment, Button } from '@mui/material'

export const PredictionForm = (props) => {
  const {_gender, _handleGender, _age, _handleAge, _smoker, _handleSmoker, 
    _cholesterol, _handleCholesterol, _hdl, _handleHdl, _hta, _handleHta, _calculate, _reset,
    _treatment, _handleTreatment} = props

  const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
  const arr = range(20, 79, 1)
  const ages = arr.map(n => n+"")

  return (
    <Container maxWidth="sm">
      <form onSubmit={_calculate}>
        <Grid 
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item>
              <Autocomplete
                value={_gender}
                onChange={_handleGender}
                id="combo-box-gender"
                options={["Hombre", "Mujer"]}
                sx={{ width: 150, paddingTop: 1, paddingBottom: 1}}
                renderInput={(params) => <TextField {...params} label="Genero" required/>}
                isOptionEqualToValue={(option, value) => option.id === value.id}
              />
            </Grid>

            <Grid item>
              <Autocomplete
                value={_age}
                onChange={_handleAge}
                id="combo-box-Age"
                options={ages}
                sx={{ width: 110, paddingTop: 1, paddingBottom: 1}}
                renderInput={(params) => <TextField {...params} label="Edad" required/>}
                isOptionEqualToValue={(option, value) => option.id === value.id}
              />
            </Grid>
          </Grid>

          <Grid item>
            <TextField 
              required
              value={_cholesterol}
              onChange={_handleCholesterol}
              id="outlined-basic" 
              label="Colesterol Total" 
              variant="outlined" 
              InputProps={{
                endAdornment: <InputAdornment position="start">mg</InputAdornment>,
              }}
              sx={{ width: 275, paddingBottom:1}}
            />
          </Grid>

          <Grid item>
            <TextField 
              required
              value={_hdl}
              onChange={_handleHdl}
              id="outlined-basic" 
              label="HDL" 
              variant="outlined" 
              InputProps={{
                endAdornment: <InputAdornment position="start">mg</InputAdornment>,
              }}
              sx={{ width: 275, paddingBottom:1}}
            />
          </Grid>

          <Grid item>
            <TextField 
              required
              value={_hta}
              onChange={_handleHta}
              id="outlined-basic" 
              label="HTA" 
              variant="outlined" 
              InputProps={{
                endAdornment: <InputAdornment position="start">mg</InputAdornment>,
              }}
              sx={{ width: 275, paddingBottom:1}}
            />
          </Grid>

          <Grid item>
            <Autocomplete
              value={_smoker}
              onChange={_handleSmoker}
              id="combo-box-smoker"
              options={["Si", "No"]}
              sx={{ width: 275, paddingBottom: 1}}
              renderInput={(params) => <TextField {...params} label="Fumador" required/>}
              isOptionEqualToValue={(option, value) => option.id === value.id}
            />
          </Grid>

          <Grid item>
            <Autocomplete
              value={_treatment}
              onChange={_handleTreatment}
              id="combo-box-medicine"
              options={["Si", "No"]}
              sx={{ width: 275, paddingBottom: 1}}
              renderInput={(params) => <TextField {...params} label="HTA bajo tratamiento" required/>}
              isOptionEqualToValue={(option, value) => option.id === value.id}
            />
          </Grid>

          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item>
              <Button variant="contained" type='submit'>
                Calculate
              </Button>
            </Grid>

            <Grid item>
              <Button variant="outlined" onClick={_reset}>
                Reset
              </Button>
            </Grid>
          </Grid>

        </Grid>
      </form>
    </Container>
  )
}
