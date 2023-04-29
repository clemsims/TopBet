// SingleMatch.js
import React, { Component } from 'react';
import Header_logged from "../../components/header_after_login/Header_after_login";
import Footer from "../../components/Footer";

class SingleMatch extends Component {
    state = {
        match: {
            homeTeam: 'Paris Saint-Germain',
            awayTeam: 'Olympique Lyonnais',
            odds: '1.80',
        },
        betAmount: '',
    };

    handleInputChange = (event) => {
        this.setState({ betAmount: event.target.value });
    };

    placeBet = () => {
        console.log('Placing bet with amount:', this.state.betAmount);
        this.props.history.push("/admin/bet_placed");
    };

    render() {
        const { homeTeam, awayTeam, odds } = this.state.match;

        return (
            <div>
                <Header_logged />
                <div className="container text-center p-2">
                    <h2>{homeTeam} vs {awayTeam}</h2>
                    <h3>Odds: {odds}</h3>
                    <div className="input-group mb-3">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter bet amount"
                            aria-label="Enter bet amount"
                            aria-describedby="basic-addon2"
                            value={this.state.betAmount}
                            onChange={this.handleInputChange}
                        />
                        <div className="input-group-append">
                            <button onClick={this.placeBet} className="btn btn-primary">
                                Place Bet
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />

            </div>
        );
    }
}

export default SingleMatch;