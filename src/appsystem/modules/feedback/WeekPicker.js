import 'rc-calendar/assets/index.css';
import React from 'react';
import Calendar from 'rc-calendar';
import DatePicker from 'rc-calendar/lib/Picker';


import moment from 'moment';

const now = moment();

const format = 'YYYY-Wo';


class WeekPicker extends React.Component {
 
  state = {
    value: undefined,
    open: false,
  };

  onChange = (value) => {
    console.log('DatePicker change: ', (value && value.format(format)));
    this.setState({
      value,
    });
  }

  onOpenChange = (open) => {
    this.setState({
      open,
    });
  }

  dateRender = (current) => {
    const selectedValue = this.state.value;
    if (selectedValue && current.year() === selectedValue.year() &&
      current.week() === selectedValue.week()) {
      return (<div className="rc-calendar-selected-day">
        <div className="rc-calendar-date">
          {current.date()}
        </div>
      </div>);
    }
    return (
      <div className="rc-calendar-date">
        {current.date()}
      </div>);
  }

  render() {
    const state = this.state;
    const calendar = (
      <Calendar
        className="week-calendar"
        dateRender={this.dateRender}
        showWeekNumber
        format={format}
        style={{ zIndex: 1000 }}
        dateInputPlaceholder="please input"
        showDateInput
      />);
    return (
    <div style={{ width: 400 }}>
      <div style={{
        boxSizing: 'border-box',
        position: 'relative',
        display: 'block',
        lineHeight: 1.5,
        marginBottom: 22,
      }}
      >
        <DatePicker
          onOpenChange={this.onOpenChange}
          open={this.state.open}
          animation="slide-up"
          calendar={calendar}
          value={state.value}
          onChange={this.onChange}
        >
          {
            ({ value }) => {
              return (
                <span className="app-calendar-picker">
                  <div>
                    <input
                      className="app-calendar-picker-input app-input"
                      placeholder="Please select week"
                      style={{ width: 250 }}
                      disabled={state.disabled}
                      readOnly
                      tabIndex="-1"
                      value={value && value.format(format) || ''}
                    />
                  </div>
                </span>
              );
            }
          }
        </DatePicker>
      </div>
    </div>);
  }
}

export default WeekPicker;