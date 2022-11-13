import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import {PredictionForm} from './components/PredictionForm'
import {Header} from './components/Header'

const App = () => {
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [cholesterol, setCholesterol] = useState('')
  const [hdl, setHdl] = useState('')
  const [hta, setHta] = useState('')
  const [smoker, setSmoker] = useState('')

  const handleGender = (event, newValue) => setGender(newValue) 

  const handleAge = (event, newValue) => setAge(newValue)

  const handleCholesterol = (event, newValue) => setCholesterol(event.target.value)

  const handleHdl = (event, newValue) => setHdl(event.target.value)

  const handleHta = (event, newValue) => setHta(event.target.value)

  const handleSmoker = (event, newValue) => setSmoker(newValue)

  const resetFields = () => {
    setGender('')
    setAge('')
    setCholesterol('')
    setHdl('')
    setHta('')
    setSmoker('')
  }

  const calculate = (event) => {
    event.preventDefault()
    console.log("calculating")
    console.log(gender)
    console.log(age)
    console.log(cholesterol)
    console.log(hdl)
    console.log(hta)
    console.log(smoker)
    resetFields()
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
        _calculate={calculate}
        _reset={resetFields}
      />

    </div>
  );
}

export default App;
