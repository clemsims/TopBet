import React, { Component } from "react";
import ReactTable from "react-table";

import api from "../services/api";

import "react-table/react-table.css";

export default class TableRanking extends Component {
  state = {
    data: []
  };

  async componentWillMount() {
    // DOCSTRING:
    let result = await api.get("ranking");

    let obj = await result.data.map(function(data, i) {
      return {
        name: data.name,
        username: data.username,
        points: data.points,
        position: i + 1
      };
    });

    this.setState({ data: obj });
  }

  render() {
    const columns = [
      {
        Header: "#",
        accessor: "position",
        width: 40
      },
      {
        Header: "Nome",
        accessor: "name"
      },
      {
        Header: "Usuário",
        accessor: "username"
      },
      {
        Header: "Pontos",
        accessor: "points",
        width: 80,
        Cell: props => <span className="number">{props.value}</span>
      }
    ];

    return (
      <ReactTable
        noDataText="Ainda não há usuários no ranking"
        data={this.state.data}
        columns={columns}
      />
    );
  }
}
