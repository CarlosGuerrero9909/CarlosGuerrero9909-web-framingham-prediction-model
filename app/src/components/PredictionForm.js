import {Container, Grid, Autocomplete, TextField, InputAdornment, Button } from '@mui/material'

export const PredictionForm = (props) => {
  const {_gender, _handleGender, _age, _handleAge, _smoker, _handleSmoker, 
    _cholesterol, _handleCholesterol, _hdl, _handleHdl, _hta, _handleHta, _calculate, _reset } = props

  const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
  const arr = range(35, 75, 1)
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
                options={["Male", "Female"]}
                sx={{ width: 140, paddingTop: 1, paddingBottom: 1}}
                renderInput={(params) => <TextField {...params} label="Gender" required/>}
                isOptionEqualToValue={(option, value) => option.id === value.id}
              />
            </Grid>

            <Grid item>
              <Autocomplete
                value={_age}
                onChange={_handleAge}
                id="combo-box-Age"
                options={ages}
                sx={{ width: 100, paddingTop: 1, paddingBottom: 1}}
                renderInput={(params) => <TextField {...params} label="Age" required/>}
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
              label="Total cholesterol" 
              variant="outlined" 
              InputProps={{
                endAdornment: <InputAdornment position="start">mg</InputAdornment>,
              }}
              sx={{ width: 255, paddingBottom:1}}
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
              sx={{ width: 255, paddingBottom:1}}
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
              sx={{ width: 255, paddingBottom:1}}
            />
          </Grid>

          <Grid item>
            <Autocomplete
              value={_smoker}
              onChange={_handleSmoker}
              id="combo-box-smoker"
              options={["Yes", "No"]}
              sx={{ width: 255, paddingBottom: 1}}
              renderInput={(params) => <TextField {...params} label="Smoker" required/>}
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
