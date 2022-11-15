import {Container, Grid, Typography} from '@mui/material'

export const Header = () => {

  return (
    <Container maxWidth="sm">
      <Grid 
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >

        <Grid item>
          <Typography variant="h4" color="skyblue" gutterBottom>
            Riesgo Cardiovascular
          </Typography>
        </Grid>

      </Grid>
    </Container>
    
  )
} 
