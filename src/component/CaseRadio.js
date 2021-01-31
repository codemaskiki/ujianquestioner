import React, { Component } from 'react'
import RadioButton from './RadioButton'

class CaseRadio extends Component {
    constructor(props){
        super(props);
        this.state = {value:''}
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        this.setState({this.state[e.target.name ] : e.target.value})
    }

    render() {
        return (
            <div className="container">
              <div className="row">
                  <div class="col-sm-5 col-md-6">
                      <p></p>
                    <label for="soal" className="form-label">Soal</label>
                    <input type="email" value={this.state.soal} className="form-control" name="soal" onChange={this.handleSubmit()} placeholder="ketik disini"/>
                    <p></p>
                    <label for="gandaA" className="form-label">Pilihan ganda a :</label>
                    <input type="email" value={this.state.gandaA} className="form-control" name="gandaA" onChange={this.handleSubmit()} placeholder="ketik disini"/>
                    <p></p>
                    <label for="gandaB" className="form-label">Pilihan ganda b :</label>
                    <input type="email" value={this.state.gandaB} className="form-control" name="gandaB" onChange={this.handleSubmit()} placeholder="ketik disini"/>
                    <p></p>
                    <label for="gandaC" className="form-label">Pilihan ganda c :</label>
                    <input type="email" value={this.state.gandaC} className="form-control" name="gandaC" onChange={this.handleSubmit()} placeholder="ketik disini"/>
                    <p></p>
                    <label for="gandaD" className="form-label">Pilihan ganda d :</label>
                    <input type="email" value={this.state.gandaD} className="form-control" name="gandaD" onChange={this.handleSubmit()} placeholder="ketik disini"/>
                    <p></p>
                    <label for="jawaban" className="form-label">Jawaban :</label>
                    <input type="email" value={this.state.jawaban} className="form-control" name="jawaban" onChange={this.handleSubmit()} placeholder="ketik disini"/>
                    <p></p>
                    <label for="point" className="form-label">Point :</label>
                    <input type="email" value={this.state.point} className="form-control" name="point" onChange={this.handleSubmit()} placeholder="ketik disini"/>
                    <button type="submit" onChange={this.handleSubmit()}>Coba</button>
                   
                    
                  </div>
                  <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
                    <h1>{this.state.soal}</h1>
                  </div>
              </div>
             
          </div>                    
                
    )
  }
}

export default CaseRadio;
