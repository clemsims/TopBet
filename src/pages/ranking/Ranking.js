import React, { Component } from 'react';
import Header from "../../components/Header";
import Table from "../../components/TableRanking";

export default class Ranking extends Component {
    componentWillMount() {
        if (!sessionStorage.getItem("username")) this.props.history.push("/login");
    }

    render() {
        return (
            <div>
                <Header />
                <Table />
            </div>
        )
    }
}
