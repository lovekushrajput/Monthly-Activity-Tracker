import React from 'react'
import '../style/index.css'
import Input from './Input'
import Activity from './Activity'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      activityNames: JSON.parse(localStorage.activity) || []
    }
    this.d = new Date()
    this.year = this.d.getFullYear()
    this.month = this.d.getMonth()
    this.totalDays = new Date(this.year, this.month + 1, 0).getDate()
    this.monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  }

  handleLocalStorage = () => {
    localStorage.setItem('activity', JSON.stringify(this.state.activityNames))
  }

  handleInput = (event) => {
    event.preventDefault()
    let { activityNames } = this.state
    let arr = []

    if (event.target[0].value) {
      for (let i = 1; i <= this.totalDays; i++) {
        arr.push({ day: i, isActive: false })
      }

      this.setState({
        activityNames: activityNames.concat({ activity: event.target[0].value, days: arr })
      }, this.handleLocalStorage)
      event.target[0].value = ''
    }

  }

  handleDays = (activityname, day) => {
    this.setState((preState) => {
      return {
        activityNames: preState.activityNames.filter((a) => {
          if (a.activity === activityname) {
            return a.days.filter((d) => {
              if (d.day === day) {
                d.isActive = d.isActive ? false : true
                return d
              }
              return d
            })
          }
          return a
        })
      }
    }, this.handleLocalStorage)
  }

  handleClose = (activity) => {
    this.setState((preState) => {
      return {
        activityNames: preState.activityNames.filter((a) => a.activity !== activity)
      }
    }, this.handleLocalStorage)
  }


  render() {
    return (
      <>
        <h1>Monthly Activity Tracker!</h1>
        <Input handleInput={this.handleInput} inputVal={this.state.activityNames} />
        <Activity activityNames={this.state.activityNames} handleClose={this.handleClose} monthName={this.monthName} month={this.month} handleDays={this.handleDays} />
      </>
    )
  }
}


export default App