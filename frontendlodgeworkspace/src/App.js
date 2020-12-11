import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Rentals from './RentalContainer';
import RentalContainer from './RentalContainer';
import Error from './Error';
import LogIn from './LogIn';
import RentalForm from './RentalForm';
import Rentalrockymount from './Rentalrockymount';
import Rentalocala from './Rentalocala';
import Rentalmountpleasant from './Rentalmountpleasant';
import Rentalcrawford from './Rentalcrawford';
import Rentalgreencove from './Rentalgreencove';
import RentalReceipt from './RentalReceipt';
import RentalReview from './RentalReview';
import RentalReviewForm from './RentalReviewForm';
import RentalReviewPrompt from './RentalReviewPrompt';
import Temporary from './Temporary';
import Search from './Search';
import RentalFavorites from './RentalFavorites';
import Register from './Register';
import Rentalsalinas from './Rentalsalinas';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    hosts: [],
    clickedRental: null,
    reservedRental: null,
    allRentals: [],
    reviewRental: null,
    searchData: [],
    favorites: [],
    hostsData: [],
    bookedRentals: []
  }
  componentDidMount() {
    fetch("http://localhost:3000/hosts")
    .then(r => r.json())
    .then(data => {
      this.setState({
        hosts: data,
        hostsData: data
      })
    })
  }
  // componentDidUpdate() {
  //   fetch("http://localhost:3000/hosts")
  //   .then(r => r.json())
  //   .then(data => {
  //     this.setState({
  //       hosts: data
  //     })
  //   })
  // }
  onClickedRental = (rental) => {
    this.setState({
      clickedRental: rental
    })
  }
  onReservedRental = (rental) => {
    this.setState({
      reservedRental: rental
    })
  }
  onReviewRental = (rental) => {this.setState({reviewRental: rental})}
  hasReviewedRental = () => {
    this.setState({allRentals: this.state.allRentals.filter(i => i !== this.state.reviewRental)})
  }
  onSearch = (e) => {
    this.state.hosts.map(
      i => {
        if(i.location.toLowerCase().includes(e.toLowerCase()) || i.rental.toLowerCase().includes(e.toLowerCase())) {
          this.setState({
            searchData: this.state.hosts.filter(i => i.location.toLowerCase().includes(e.toLowerCase()) || i.rental.toLowerCase().includes(e.toLowerCase()))
          })
        }
      }
    )
  }
  // onFavorite = () => {this.setState({favorites: this.state.hosts.filter(i => i.fave === true)})}
  onFilterHosts = (e) => {
    if(e === "Please choose a state") {
      this.setState({hostsData: this.state.hosts})
    }
    else {
      if(e === "CA" || e === "FL" || e === "MI" || e === "NC" || e === "TN") {
        this.setState({hostsData: this.state.hosts.filter(i => i.location[i.location.length-2] === e[0] && i.location[i.location.length-1] === e[1])})
      }
    }
  }
  render() {
    console.log(this.state.hosts)
    return(
      <BrowserRouter>
        <div>
          <Route render={() => <Header onSearch={this.onSearch}favorites={this.state.favorites} onFavorite={this.onFavorite} />} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/favorites" render={() => <RentalFavorites favorites={this.state.favorites} />} />
            <Route path="/rentals" render={() => <RentalContainer hostsData={this.state.hostsData} onClickedRental={this.onClickedRental} onFilterHosts={this.onFilterHosts} />} />
            <Route path="/rockymount" render={() => <Rentalrockymount clickedRental={this.state.clickedRental} onReservedRental={this.onReservedRental} allRentals={this.state.allRentals} />} />
            <Route path="/ocala" render={() => <Rentalocala clickedRental={this.state.clickedRental} onReservedRental={this.onReservedRental} allRentals={this.state.allRentals} />} />
            <Route path="/mountpleasant" render={() => <Rentalmountpleasant clickedRental={this.state.clickedRental} onReservedRental={this.onReservedRental} allRentals={this.state.allRentals} />} />
            <Route path="/crawford" render={() => <Rentalcrawford clickedRental={this.state.clickedRental} onReservedRental={this.onReservedRental} allRentals={this.state.allRentals} />} />
            <Route path="/greencovesprings" render={() => <Rentalgreencove clickedRental={this.state.clickedRental} onReservedRental={this.onReservedRental} allRentals={this.state.allRentals} />} />
            {/* <Route path="/salinas" render={() => <Rentalsalinas />} /> */}
            <Route path="/salinas" render={() => <Rentalsalinas clickedRental={this.state.clickedRental} onReservedRental={this.onReservedRental} allRentals={this.state.allRentals} />} />
            <Route path="/rentalreceipt" render={() => <RentalReceipt reservedRental={this.state.reservedRental} />} />
            <Route path="/writereview" render={() => <RentalReview allRentals={this.state.allRentals} onReviewRental={this.onReviewRental} />} />
            <Route path="/rentalreview" render={() => <RentalReviewForm reviewRental={this.state.reviewRental} hasReviewedRental={this.hasReviewedRental} />} />
            <Route path="/rentalreviewprompt" component={RentalReviewPrompt} />
            <Route path="/search" render={() => <Search searchData={this.state.searchData} onClickedRental={this.onClickedRental} />} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={LogIn} />
            <Route path="/temporary" component={Temporary} />
            <Route path="*" component={Error} />
          </Switch>
          <Route component={Footer} /> 
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
