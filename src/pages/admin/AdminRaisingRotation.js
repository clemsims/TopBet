import React, { Component } from 'react';
import ReactTable from "react-table";

import Header_logged from "../../components/header_after_login/Header_after_login";
import Footer from "../../components/Footer";

import 'react-table/react-table.css'
import './style_admin_raising_rotation/admin.css';

import api from "../../services/api"
import $ from "jquery";

class Admin extends Component {
    state = {
        matches: [
            { homeTeam: "Paris Saint-Germain", awayTeam: "Olympique Lyonnais", odds: "1.80" },
            { homeTeam: "Arsenal", awayTeam: "Manchester United", odds: "2.50" },
        ],
    }

    betNow() {
        this.props.history.push("/admin/place_bet");
    }

    render() {
        return (
            <div>
                <Header_logged />
                <div className="container text-center p-2">
                    <div className="container"><p className="h2">Sports Events</p></div>

                    <div className="container mt-5">
                        <ReactTable
                            previousText="Previous"
                            nextText="Next"
                            noDataText="No sports events available"
                            data={this.state.matches}
                            columns={[
                                {
                                    Header: "Home Team",
                                    accessor: "homeTeam",
                                },
                                {
                                    Header: "Away Team",
                                    accessor: "awayTeam",
                                },
                                {
                                    Header: "Odds",
                                    accessor: "odds",
                                },
                                {
                                    Header: "Bet Now",
                                    accessor: "betNow",
                                    Cell: row => (
                                        <button onClick={() => this.betNow()} className="btn btn-primary">
                                            Bet Now
                                        </button>
                                    ),
                                },
                            ]}
                            defaultPageSize={5}
                            className="-striped -highlight"
                        />
                    </div>
                </div>
                <Footer />
            </div >
        );
    }
}

export default Admin;
