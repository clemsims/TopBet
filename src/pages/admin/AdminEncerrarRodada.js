import React, { Component } from "react";
import ReactTable from "react-table";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "react-table/react-table.css";

import api from "../../services/api";
import $ from "jquery";

export default class AdminEncerrarRodada extends Component {
  state = {
    data: [],
    nameRodada: "",
    rowAtual: "",
    rowValue: "",
    button: "btn btn-block btn-default"
  };

  async componentWillMount() {
    if (
      sessionStorage.getItem("admin") === false ||
      !sessionStorage.getItem("username")
    )
      return this.props.history.push("/main");
    let response = await api.get(`rodada`);

    let obj = await response.data.map(function(data, i) {
      return {
        _id: data._id,
        nameRodada: data.nameRodada,
        active: `${data.active}`
          .replace("true", "Ativada")
          .replace("false", "Desativada")
      };
    });

    this.setState({ data: obj });
  }

  handleOnChange = e => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  removeRow = row => {
    return (
      <div className="container">
        <button
          className="btn btn-danger btn-block"
          data-toggle="modal"
          data-target="#modalEncerrarTabela"
          onClick={e => {
            this.setState({
              rowAtual: row.index
            });

            this.setState({
              rowValue: row.original._id
            });

            //console.log(row)
          }}
        >
          Encerrar rodada
        </button>
      </div>
    );
  };

  enable_disableRodada = row => {
    return (
      <div className="container">
        <button
          className={this.state.button}
          onClick={async e => {
            let response = await api.get(`rodada/${row.original._id}`);

            response.data.active
              ? await api.post(`admin/desativar/rodada/${row.original._id}`)
              : await api.post(`admin/ativar/rodada/${row.original._id}`);

            let responseMap = await api.get(`rodada`);

            let obj = await responseMap.data.map(function(data, i) {
              return {
                _id: data._id,
                nameRodada: data.nameRodada,
                active: `${data.active}`
                  .replace("true", "Ativada")
                  .replace("false", "Desativada")
              };
            });

            this.setState({ data: obj });
          }}
        >
          Ativar/Desativar
        </button>
      </div>
    );
  };

  saveTableAdmin = async () => {
    const { data, rowAtual, rowValue } = this.state;
    $("#icon-loading").addClass("fas fa-sync-alt loading-refresh-animate");

    try {
      let response = await api.delete(`admin/deletar/rodada/${rowValue}`);

      await data.splice(rowAtual, 1);

      this.setState({
        data: data
      });

      this.setState({
        rowAtual: ""
      });

      this.setState({
        rowValue: ""
      });

      $("#alert-admin-encerrar-rodada")
        .addClass("alert alert-success")
        .text("A rodada foi finalizada com sucesso!");
      $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
      setTimeout(function() {
        $("#alert-admin-encerrar-rodada")
          .removeClass("alert alert-success")
          .text("");
      }, 3000);
    } catch (error) {
      $("#alert-admin-encerrar-rodada")
        .addClass("alert alert-danger")
        .text("Ocorreu um erro na sua requisição!");
      $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
      setTimeout(function() {
        $("#alert-admin-encerrar-rodada")
          .removeClass("alert alert-danger")
          .text("");
      }, 3000);
      console.log(error);
    }
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        <Header />
        <div className="container text-center p-2">
          <div class="" role="alert" id="alert-admin" data-dismiss="alert" />
          <div className="container">
            <p className="h2">Rodadas Disponíveis</p>
          </div>

          <div className="container mt-5">
            <ReactTable
              previousText="Anterior"
              nextText="Próximo"
              noDataText="Sem dados"
              filterable={true}
              data={data}
              columns={[
                {
                  Header: "ID",
                  accessor: "_id"
                },
                {
                  Header: "Nome da rodada",
                  accessor: "nameRodada"
                },
                {
                  Header: "Status",
                  accessor: "active"
                },
                {
                  Header: "Ativar/Desativar rodada",
                  Cell: this.enable_disableRodada
                },
                {
                  Header: "Encerrar",
                  Cell: this.removeRow
                }
              ]}
              defaultPageSize={20}
              className="-striped -highlight"
            />
          </div>

          <div
            class="modal fade"
            id="modalEncerrarTabela"
            role="dialog"
            aria-labelledby="modalEncerrarTabelaLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div
                class=""
                role="alert"
                id="alert-admin-encerrar-rodada"
                data-dismiss="alert"
              />
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="modalEncerrarTabelaLabel">
                    Confirme se você deseja criar a rodada
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    id="btn-encerrarRodada"
                    onClick={this.saveTableAdmin}
                  >
                    Confirmar &nbsp;<i className="" id="icon-loading" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
