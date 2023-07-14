import React, { Component } from 'react'
import './UserCrud.css'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
  icon: 'address-book',
  title: 'Contas a receber',
  subtitle: 'Cadastro de contas: criar, listar, alterar e excluir!'
}

const baseUrl = 'http://localhost:8080'

const initialState = {
  clientDTO: {
    id: '',
    firstName: '',
    lastName: '',
    typeClient: ''
  },
  receivableDTO: {
    idReceivable: '',
    totalValue: '',
    description: '',
    status: ''
  },
  list: [ {
    clientDTO: {
      id: '1',
      firstName: 'asdd',
      lastName: 'asd',
      typeClient: 'asdad'
    },
    receivableDTO: {
      idReceivable: '1',
      totalValue: '200',
      description: 'asdas',
      status: 'dasd'
    }
  }
  ]
}

const ModalDefault = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default class UserCrud extends Component {
  state = { ...initialState, isModalOpen: false }

  transformForCreate(client) {
    const { firstName, lastName, typeClient } = client.clientDTO
    const { totalValue, description, status } = client.receivableDTO

    return {
      clientDTO: {
        firstName,
        lastName,
        typeClient
      },
      receivableDTO: {
        totalValue,
        description,
        status
      }
    }
  }

  transformResponse(response) {
    return response.map(client => {
      const { id, firstName, lastName, typeClient, receivableModels } = client
      const [receivable] = receivableModels
      const { idReceivable, description, status, totalValue } = receivable

      return {
        clientDTO: {
          id,
          firstName,
          lastName,
          typeClient
        },
        receivableDTO: {
          idReceivable,
          totalValue,
          description,
          status
        }
      }
    })
  }

  componentDidMount() {
    axios.get(`${baseUrl}/clients`).then(resp => {
      this.setState({ list: this.transformResponse(resp.data) })
    })
  }

  clear() {
    this.setState({ clientDTO: initialState.clientDTO, receivableDTO: initialState.receivableDTO, isModalOpen: false });
  }

  save() {
    const { clientDTO, receivableDTO } = this.state
    const method = clientDTO.id ? 'put' : 'post'
    const url = clientDTO.id ? `${baseUrl}/clients/${clientDTO.id}` : `${baseUrl}/clients`

    const requestData = method === 'post' ? this.transformForCreate(this.state) : this.state

    axios[method](url, requestData)
      .then(resp => {
        const list = this.getUpdatedList(resp.data)
        this.setState({ ...initialState, list, isModalOpen: false })
      })
  }

  getUpdatedList(client, add = true) {
    const list = this.state.list.filter(u => u.clientDTO.id !== client.clientDTO.id);
    if (add) list.unshift(client);
    return list;
  }

  updateField(event) {
    const { name, value } = event.target
    const { clientDTO, receivableDTO } = this.state

    if (name in clientDTO) {
      this.setState(prevState => ({
        clientDTO: {
          ...prevState.clientDTO,
          [name]: value
        }
      }))
    } else if (name in receivableDTO) {
      this.setState(prevState => ({
        receivableDTO: {
          ...prevState.receivableDTO,
          [name]: value
        }
      }))
    }
  }

  load(client) {
    this.setState({ ...client, isModalOpen:true })
  }

  remove(client) {
    axios.delete(`${baseUrl}/clients/${client.clientDTO.id}`).then(resp => {
      const list = this.getUpdatedList(client, false);
      this.setState({ list });
    });
  }

  closeModal = () => {
    this.setState({ clientDTO: initialState.clientDTO, receivableDTO: initialState.receivableDTO , isModalOpen: false });
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  renderModal() {
    const { clientDTO, receivableDTO } = this.state

    return (
      <div>
        <button className="btn btn-primary" onClick={() => this.openModal()}>Criar cliente</button>
        <ModalDefault isOpen={this.state.isModalOpen} onClose={this.closeModal}>
          <h2 className='text-center'>Criar cliente</h2>
          <div className="form">
            <div className="text-center">
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={clientDTO.firstName}
                    onChange={e => this.updateField(e)}
                    placeholder="Digite o nome..."
                  />
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>Sobrenome</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={clientDTO.lastName}
                    onChange={e => this.updateField(e)}
                    placeholder="Digite o sobrenome..."
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>Tipo do cliente</label>
                  <input
                    type="text"
                    className="form-control"
                    name="typeClient"
                    value={clientDTO.typeClient}
                    onChange={e => this.updateField(e)}
                    placeholder="Digite o tipo..."
                  />
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>Descrição da conta</label>
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    value={receivableDTO.description}
                    onChange={e => this.updateField(e)}
                    placeholder="Digite a descrição..."
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>Status do pagamento</label>
                  <input
                    type="text"
                    className="form-control"
                    name="status"
                    value={receivableDTO.status}
                    onChange={e => this.updateField(e)}
                    placeholder="Digite o status..."
                  />
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>Valor total</label>
                  <input
                    type="text"
                    className="form-control"
                    name="totalValue"
                    value={receivableDTO.totalValue}
                    onChange={e => this.updateField(e)}
                    placeholder="Digite o valor..."
                  />
                </div>
              </div>
            </div>

            <hr />
            <div className="row">
              <div className="col-12 d-flex justify-content-end">
                <button className="btn btn-primary" onClick={e => this.save(e)}>
                  Salvar
                </button>

                <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </ModalDefault>
      </div>
    )
  }

  renderForm() {
    const { clientDTO, receivableDTO } = this.state

    return (
      <div className="form">
        <div className="text-center">
          {this.renderModal()}
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={clientDTO.firstName}
                onChange={e => this.updateField(e)}
                placeholder="Digite o nome..."
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Sobrenome</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={clientDTO.lastName}
                onChange={e => this.updateField(e)}
                placeholder="Digite o sobrenome..."
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Tipo do cliente</label>
              <input
                type="text"
                className="form-control"
                name="typeClient"
                value={clientDTO.typeClient}
                onChange={e => this.updateField(e)}
                placeholder="Digite o tipo..."
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Descrição da conta</label>
              <input
                type="text"
                className="form-control"
                name="description"
                value={receivableDTO.description}
                onChange={e => this.updateField(e)}
                placeholder="Digite a descrição..."
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Status do pagamento</label>
              <input
                type="text"
                className="form-control"
                name="status"
                value={receivableDTO.status}
                onChange={e => this.updateField(e)}
                placeholder="Digite o status..."
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Valor total</label>
              <input
                type="text"
                className="form-control"
                name="totalValue"
                value={receivableDTO.totalValue}
                onChange={e => this.updateField(e)}
                placeholder="Digite o valor..."
              />
            </div>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary" onClick={e => this.save(e)}>
              Salvar
            </button>

            <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    )
  }

  renderTable() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Tipo</th>
            <th>Descrição</th>
            <th>Status</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }

  renderRows() {
    return this.state.list.map(item => {
      const { clientDTO, receivableDTO } = item;
      const { id, firstName, lastName, typeClient } = clientDTO;
      const { idReceivable, description, status, totalValue } = receivableDTO;

      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{typeClient}</td>
          <td>{description}</td>
          <td>{status}</td>
          <td>{totalValue}</td>
          <td>
            <button className="btn btn-warning" onClick={() => this.load(item)}>
              <i className="fa fa-pencil"></i>
            </button>
            <button className="btn btn-danger m-1" onClick={() => this.remove(item)}>
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      );
    });
  }




  render() {
    return (
      <Main {...headerProps}>
        {this.renderModal()}
        {this.renderTable()}
      </Main>
    )
  }
}