import 'rc-calendar/assets/index.css';
import React from 'react';
import Calendar from 'rc-calendar';
import RcDatePicker from 'rc-calendar/lib/Picker';

const format = 'YYYY-MM-DD';

class DatePicker extends React.Component {
 
 


  render() {
   
    return (
        <div>
          <RcDatePicker
            calendar={<Calendar/>}
          >
            {
              ({ value }) => {
                return (
                <span className="app-calendar-picker">
                  <div>
                    <input className="app-calendar-picker-input app-input" placeholder="Please select date" readOnly value={value && value.format(format) || ''} />
                  </div>
                </span>
                );
              }
            }
          </RcDatePicker>
        </div>
    )
  }
}
export default DatePicker