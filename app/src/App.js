import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import {PredictionForm} from './components/PredictionForm'
import {Header} from './components/Header'
import {CardiovascularRisk} from './components/CardiovascularRisk'

const App = () => {
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [cholesterol, setCholesterol] = useState('')
  const [hdl, setHdl] = useState('')
  const [hta, setHta] = useState('')
  const [smoker, setSmoker] = useState('')
  const [treatment, setTreatment] = useState('')
  const [renderCvRisk, setRenderCvRisk] = useState(false)

  const handleGender = (event, newValue) => setGender(newValue) 

  const handleAge = (event, newValue) => setAge(newValue)

  const handleCholesterol = (event, newValue) => setCholesterol(event.target.value)

  const handleHdl = (event, newValue) => setHdl(event.target.value)

  const handleHta = (event, newValue) => setHta(event.target.value)

  const handleSmoker = (event, newValue) => setSmoker(newValue)

  const handleTreatment = (event, newValue) => setTreatment(newValue)

  let puntos = 0

  const resetFields = () => {
    setGender('')
    setAge('')
    setCholesterol('')
    setHdl('')
    setHta('')
    setSmoker('')
    setTreatment('')
    setRenderCvRisk(false)
  }

  const calculate = (event) => {
    event.preventDefault()
    puntos = 0

    const nAge = parseInt(age, 10)
    const nCholesterol = parseInt(cholesterol, 10)
    const nHdl = parseInt(hdl, 10)
    const nHta = parseInt(hta, 10)

    if(gender === 'Mujer') {
      validateAgeFemale(nAge)
      validateCholesterolFemale(nAge, nCholesterol)
      validateSmokerFemale(nAge)
      validateHdlFemale(nHdl)
      validateHtaFemale(nHta)
      console.log(puntos)
    } else {
      validateAgeMale(nAge)
      validateCholesterolMale(nAge, nCholesterol)
      validateSmokerMale(nAge)
      validateHdlMale(nHdl)
      validateHtaMale(nHta)
      console.log(puntos)

    }
    setRenderCvRisk(true)
  }

  const validateAgeFemale = (nAge) => {
    if (nAge >= 20 && nAge <= 34)
      puntos += -7
    if (nAge >= 35 && nAge <= 39)
      puntos += -3
    if (nAge >= 40 && nAge <= 44)
      puntos += 0
    if (nAge >= 45 && nAge <= 49)
      puntos += 3
    if (nAge >= 50 && nAge <= 54)
      puntos += 6
    if (nAge >= 55 && nAge <= 59)
      puntos += 8
    if (nAge >= 60 && nAge <= 64)
      puntos += 10
    if (nAge >= 65 && nAge <= 69)
      puntos += 12
    if (nAge >= 70 && nAge <= 74)
      puntos += 14
    if (nAge >= 75 && nAge <= 79)
      puntos += 16
  }

  const validateAgeMale = (nAge) => {
    if (nAge >= 20 && nAge <= 34)
      puntos += -9
    if (nAge >= 35 && nAge <= 39)
      puntos += -4
    if (nAge >= 40 && nAge <= 44)
      puntos += 0
    if (nAge >= 45 && nAge <= 49)
      puntos += 3
    if (nAge >= 50 && nAge <= 54)
      puntos += 6
    if (nAge >= 55 && nAge <= 59)
      puntos += 8
    if (nAge >= 60 && nAge <= 64)
      puntos += 10
    if (nAge >= 65 && nAge <= 69)
      puntos += 11
    if (nAge >= 70 && nAge <= 74)
      puntos += 12
    if (nAge >= 75 && nAge <= 79)
      puntos += 13
  }

  const validateCholesterolFemale = (nAge, nCholesterol) => {
    if (nAge >= 20 && nAge <= 39) {
      if(nCholesterol < 160)
        puntos += 0
      if(nCholesterol >= 160 && nCholesterol <= 199)
        puntos += 4
      if(nCholesterol >= 200 && nCholesterol <= 239)
        puntos += 8
      if(nCholesterol >= 240 && nCholesterol <= 279)
        puntos += 11
      if(nCholesterol >= 280)
        puntos += 13
    }
    if (nAge >= 40 && nAge <= 49) {
      if(nCholesterol < 160)
        puntos += 0
      if(nCholesterol >= 160 && nCholesterol <= 199)
        puntos += 3
      if(nCholesterol >= 200 && nCholesterol <= 239)
        puntos += 6
      if(nCholesterol >= 240 && nCholesterol <= 279)
        puntos += 8
      if(nCholesterol >= 280)
        puntos += 10
    }
    if (nAge >= 50 && nAge <= 59) {
      if(nCholesterol < 160)
        puntos += 0
      if(nCholesterol >= 160 && nCholesterol <= 199)
        puntos += 2
      if(nCholesterol >= 200 && nCholesterol <= 239)
        puntos += 4
      if(nCholesterol >= 240 && nCholesterol <= 279)
        puntos += 5
      if(nCholesterol >= 280)
        puntos += 7
    }
    if (nAge >= 60 && nAge <= 69) {
      if(nCholesterol < 160)
        puntos += 0
      if(nCholesterol >= 160 && nCholesterol <= 199)
        puntos += 1
      if(nCholesterol >= 200 && nCholesterol <= 239)
        puntos += 2
      if(nCholesterol >= 240 && nCholesterol <= 279)
        puntos += 3
      if(nCholesterol >= 280)
        puntos += 4
    }
    if (nAge >= 70 && nAge <= 79) {
      if(nCholesterol < 160)
        puntos += 0
      if(nCholesterol >= 160 && nCholesterol <= 199)
        puntos += 1
      if(nCholesterol >= 200 && nCholesterol <= 239)
        puntos += 1
      if(nCholesterol >= 240 && nCholesterol <= 279)
        puntos += 2
      if(nCholesterol >= 280)
        puntos += 2
    }
  }

  const validateCholesterolMale = (nAge, nCholesterol) => {
    if (nAge >= 20 && nAge <= 39) {
      if(nCholesterol < 160)
        puntos += 0
      if(nCholesterol >= 160 && nCholesterol <= 199)
        puntos += 4
      if(nCholesterol >= 200 && nCholesterol <= 239)
        puntos += 7
      if(nCholesterol >= 240 && nCholesterol <= 279)
        puntos += 9
      if(nCholesterol >= 280)
        puntos += 11
    }
    if (nAge >= 40 && nAge <= 49) {
      if(nCholesterol < 160)
        puntos += 0
      if(nCholesterol >= 160 && nCholesterol <= 199)
        puntos += 3
      if(nCholesterol >= 200 && nCholesterol <= 239)
        puntos += 5
      if(nCholesterol >= 240 && nCholesterol <= 279)
        puntos += 8
      if(nCholesterol >= 280)
        puntos += 8
    }
    if (nAge >= 50 && nAge <= 59) {
      if(nCholesterol < 160)
        puntos += 0
      if(nCholesterol >= 160 && nCholesterol <= 199)
        puntos += 2
      if(nCholesterol >= 200 && nCholesterol <= 239)
        puntos += 3
      if(nCholesterol >= 240 && nCholesterol <= 279)
        puntos += 4
      if(nCholesterol >= 280)
        puntos += 5
    }
    if (nAge >= 60 && nAge <= 69) {
      if(nCholesterol < 160)
        puntos += 0
      if(nCholesterol >= 160 && nCholesterol <= 199)
        puntos += 1
      if(nCholesterol >= 200 && nCholesterol <= 239)
        puntos += 1
      if(nCholesterol >= 240 && nCholesterol <= 279)
        puntos += 2
      if(nCholesterol >= 280)
        puntos += 3
    }
    if (nAge >= 70 && nAge <= 79) {
      if(nCholesterol < 160)
        puntos += 0
      if(nCholesterol >= 160 && nCholesterol <= 199)
        puntos += 0
      if(nCholesterol >= 200 && nCholesterol <= 239)
        puntos += 0
      if(nCholesterol >= 240 && nCholesterol <= 279)
        puntos += 1
      if(nCholesterol >= 280)
        puntos += 1
    }
  }

  const validateSmokerFemale = (nAge) => {
    if(smoker === 'No')
      puntos += 0
    else{
      if (nAge >= 20 && nAge <= 39)
        puntos += 9
      if (nAge >= 40 && nAge <= 49)
        puntos += 7
      if (nAge >= 50 && nAge <= 59)
        puntos += 4
      if (nAge >= 60 && nAge <= 69)
        puntos += 2
      if (nAge >= 70 && nAge <= 79)
        puntos += 1
    }
  }
  
  const validateSmokerMale = (nAge) => {
    if(smoker === 'No')
      puntos += 0
    else{
      if (nAge >= 20 && nAge <= 39)
        puntos += 8
      if (nAge >= 40 && nAge <= 49)
        puntos += 5
      if (nAge >= 50 && nAge <= 59)
        puntos += 3
      if (nAge >= 60 && nAge <= 69)
        puntos += 1
      if (nAge >= 70 && nAge <= 79)
        puntos += 1
    }
  }

  const validateHdlFemale = (nHdl) => {
    if (nHdl >= 60)
      puntos += -1
    if (nHdl >= 50 && nHdl <= 59)
      puntos += 0
    if (nHdl >= 40 && nHdl <= 49)
      puntos += 1
    if (nHdl < 40)
      puntos += 2
  }

  const validateHdlMale = (nHdl) => {
    if (nHdl >= 60)
      puntos += -1
    if (nHdl >= 50 && nHdl <= 59)
      puntos += 0
    if (nHdl >= 40 && nHdl <= 49)
      puntos += 1
    if (nHdl < 40)
      puntos += 2
  }

  const validateHtaFemale = (nHta) => {
    if(treatment === 'No') {
      if(nHta < 120)
        puntos += 0
      if(nHta >= 120 && nHta <= 129)
        puntos += 1
      if(nHta >= 130 && nHta <= 139)
        puntos += 2
      if(nHta >= 140 && nHta <= 149)
        puntos += 3 
      if(nHta >= 160)
        puntos += 4
    } else {
      if(nHta < 120)
        puntos += 0
      if(nHta >= 120 && nHta <= 129)
        puntos += 3
      if(nHta >= 130 && nHta <= 139)
        puntos += 4
      if(nHta >= 140 && nHta <= 149)
        puntos += 5 
      if(nHta >= 160)
        puntos += 6
    }
  }

  const validateHtaMale = (nHta) => {
    if(treatment === 'No') {
      if(nHta < 120)
        puntos += 0
      if(nHta >= 120 && nHta <= 129)
        puntos += 0
      if(nHta >= 130 && nHta <= 139)
        puntos += 1
      if(nHta >= 140 && nHta <= 149)
        puntos += 1 
      if(nHta >= 160)
        puntos += 2
    } else {
      if(nHta < 120)
        puntos += 0
      if(nHta >= 120 && nHta <= 129)
        puntos += 1
      if(nHta >= 130 && nHta <= 139)
        puntos += 2
      if(nHta >= 140 && nHta <= 149)
        puntos += 2 
      if(nHta >= 160)
        puntos += 3
    }
  }

  return (
    <div>
      <Header/>
      <PredictionForm 
        _gender={gender} 
        _handleGender={handleGender}
        _age={age}
        _handleAge={handleAge} 
        _cholesterol={cholesterol}
        _handleCholesterol={handleCholesterol}
        _hdl={hdl}
        _handleHdl={handleHdl}
        _hta={hta}
        _handleHta={handleHta}
        _smoker={smoker}
        _handleSmoker={handleSmoker}
        _treatment={treatment}
        _handleTreatment={handleTreatment}
        _calculate={calculate}
        _reset={resetFields}
      />
      {renderCvRisk ? 
        <CardiovascularRisk
          _gender={gender} 
          _age={age}
          _cholesterol={cholesterol}
          _hdl={hdl}
          _hta={hta}
          _smoker={smoker}
          _treatment={treatment}
        /> : <p></p>}
      

    </div>
  );
}

export default App;
