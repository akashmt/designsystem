import 'rc-time-picker/assets/index.css';
import styled from 'styled-components'
import React from 'react';
//import moment from 'moment';
import RcTimePicker from 'rc-time-picker';


const format = 'HH:mm:ss';

//const now = moment();

function onChange(value) {
  console.log(value && value.format(format));
}

class TimePicker extends React.Component {
	render(){
    const { disabled,use12Hours, defaultValue, format, defaultOpenValue, hourStep, minuteStep, secondStep, showSecond,showMinute,showHour } =this.props
   
		return (
      <StyledSection>
      <RcTimePicker
        use12Hours={use12Hours}
        disabled={disabled}
        showHour={showHour}
        showMinute={showMinute}
        showSecond={showSecond}
        defaultValue={defaultValue}
        defaultOpenValue={defaultOpenValue}
        className="app-time-picker"
        onChange={onChange}
        format={format}
        placeholder="Select time"
        hourStep={hourStep}
        minuteStep={minuteStep}
        secondStep={secondStep}
        inputReadOnly
      />
      </StyledSection>
		)
	}
}

export default TimePicker

const StyledSection = styled.section`

`
