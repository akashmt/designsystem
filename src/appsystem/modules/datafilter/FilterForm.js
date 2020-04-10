import React, { Component } from 'react'
import FilterOptions from './FilterOptions'
import FilterItems from './FilterItems'

export default class FilterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data,
      bender: '',
      nation: '',
      person: '',
      show: '',
      //multiple: false
    };

    this.filterItems = this.filterItems.bind(this);
    //this.checked = this.checked.bind(this);
  }

  // checked(e) {
  //   this.setState({multiple: e.target.value});
  // }

  filterItems(val, type) {
     switch (type) {
      case 'bender':
        this.setState({bender: val})
        break
      case 'nation':
        this.setState({nation: val})
        break
      case 'person': 
        this.setState({person: val})
        break
      case 'show':
        this.setState({show: val})
        break
      default:
        break
    }
  }

  render() {
    var filteredItems = this.props.data;
    var state = this.state;
    var filterProperties = ["bender", "nation", "person", "show"]
    filterProperties.forEach(function(filterBy) {
      const filterValue = state[filterBy]
      console.log(filterValue)
      if (filterValue) {
        filteredItems = filteredItems.filter(function(item) {
          console.log(item)
          return item[filterBy] === filterValue
        })
      }
    })

    var benderArray = this.props.data.map(function(item) { return item.bender })
    var nationArray = this.props.data.map(function(item) { return item.nation })
    var personArray = this.props.data.map(function(item) { return item.person })
    var showArray = this.props.data.map(function(item) { return item.show })

    benderArray = Array.from(new Set(benderArray))
    nationArray = Array.from(new Set(nationArray))
    personArray = Array.from(new Set(personArray))
    showArray= Array.from(new Set(showArray))
    return (
      <div className="container">
        <FilterOptions 
            data={this.state.data} 
            benderOptions={benderArray} 
            nationOptions={nationArray}
            personOptions={personArray}
            showOptions={showArray}
            changeOption={this.filterItems} />
        <div className="filter-form">
          <FilterItems data={filteredItems} />
        </div>
      </div>
    )
  }
}