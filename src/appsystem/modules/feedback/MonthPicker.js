import 'rc-calendar/assets/index.css';
import React from 'react';
import PropTypes from 'prop-types';
import MonthCalendar from 'rc-calendar/lib/MonthCalendar';
import DatePicker from 'rc-calendar/lib/Picker';
import enUS from 'rc-calendar/lib/locale/en_US';

import moment from 'moment';

import 'moment/locale/en-gb';

const format = 'YYYY-MM';

const now = moment();


const defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');

class MonthPicker extends React.Component {
  

  constructor(props) {
    super(props);

    this.state = {
      showTime: true,
      disabled: false,
      value: props.defaultValue,
    };
  }

  onChange = (value) => {
    console.log(`DatePicker change: ${value && value.format(format)}`);
    this.setState({
      value,
    });
  }

  onShowTimeChange = (e) => {
    this.setState({
      showTime: e.target.checked,
    });
  }

  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }

  render() {
    const state = this.state;
    const { placeholder } = this.props
    const calendar = (<MonthCalendar
      locale={enUS}
      style={{ zIndex: 1000 }}
    />);
    return (<div>
      <div>
        <DatePicker
          animation="slide-up"
          disabled={state.disabled}
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
                      readOnly
                      disabled={state.disabled}
                      value={value && value.format(format)}
                      placeholder={placeholder}
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

export default MonthPicker