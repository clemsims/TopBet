import React, { Component } from 'react';
import Table from "../../components/TableRanking";
import Header_logged from "../../components/header_after_login/Header_after_login";

export default class Ranking extends Component {
    componentWillMount() {
        if (!sessionStorage.getItem("username")) this.props.history.push("/login");
    }

    render() {
        return (
            <div>
                <Header_logged />
                <Table />
            </div>
        )
    }
}
