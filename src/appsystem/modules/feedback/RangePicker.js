/* eslint react/no-multi-comp:0, no-console:0 */

import React from 'react';
import Picker from 'rc-calendar/lib/Picker';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import TimePickerPanel from 'rc-time-picker/lib/Panel';
import 'rc-calendar/assets/index.css';
import 'rc-time-picker/assets/index.css';

import moment from 'moment';



const now = moment();

const defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');

const timePickerElement = (
  <TimePickerPanel
    defaultValue={[moment('00:00:00', 'HH:mm:ss'), moment('23:59:59', 'HH:mm:ss')]}
  />
);

const formatStr = 'YYYY-MM-DD';
function format(v) {
  return v ? v.format(formatStr) : '';
}


class RangePicker extends React.Component {
  state = {
    value: [],
    hoverValue: [],
  }

  onChange = (value) => {
    console.log('onChange', value);
    this.setState({ value });
  }

  onHoverChange = (hoverValue) => {
    this.setState({ hoverValue });
  }

  render() {
    const state = this.state;
    const calendar = (
      <RangeCalendar
        hoverValue={state.hoverValue}
        onHoverChange={this.onHoverChange}
        showWeekNumber={false}
        dateInputPlaceholder={['start', 'end']}
        //defaultValue={[now, now.clone().add(1, 'months')]}
       // timePicker={timePickerElement}
      />
    );
    return (
      <Picker
        value={state.value}
        onChange={this.onChange}
        animation="slide-up"
        calendar={calendar}
      >
        {
          ({ value }) => {
            return (
              <span className="app-calendar-picker">
                <div>
                  <input
                    style={{ width: 350 }}
                    className="app-calendar-picker-input app-input"
                    placeholder="Start date ~ End date"
                    readOnly
                    value={value && `${format(value[0])} ~ ${format(value[1])}`}
                  />
                </div>
              </span>
            );
          }
        }
      </Picker>);
  }
}

export default RangePicker