import React, { Component } from 'react'
import TCard from './Card.type'
import Card from './Card'
import NoteForm from './NoteForm'


type State = {
  cards: TCard[] | []
  formData: string
}

class CRUD extends Component {
  state: State = {
    cards: [],
    formData: ''
  }

  async fetchCards(): Promise<void> {
    const response = await fetch('http://localhost:8000/notes')
    const cards = await response.json()
    this.setState({ cards })
  }

  async addCard(content: string) {
    await fetch('http://localhost:8000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content
      })
    })
    await this.fetchCards()
  }

  async removeCard(id: number): Promise<void> {
    await fetch(`http://localhost:8000/notes/${id}`, {
      method: 'DELETE'
    })
    await this.fetchCards()
  }

  async componentDidMount(): Promise<void> {
    await this.fetchCards()
  }



  render() {
    return (
      <React.Fragment>
        <div className='notes'>
          <p className='title'>Notes</p>
          <button onClick={() => { this.fetchCards() }} type='button'>
            <i className="fa fa-refresh" aria-hidden="true"></i>
          </button>
        </div>
        <div className='cards'>
          {this.state.cards.map((card: TCard) => <Card key={card.id} data={card} onRemove={() => this.removeCard(card.id)} />)}
        </div>
        <NoteForm onSubmit={this.addCard.bind(this)} />
      </React.Fragment>
    )
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export default CRUD
