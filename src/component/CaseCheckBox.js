import React, { Component } from 'react'
import CheckBox from './CheckBox';

class CaseCheckBox extends Component {
  render() {
    return (
        <div class="container">
        <div class="row">
            <div class="col-sm-5 col-md-6">
                <p></p>
              <label for="soal" class="form-label">Soal</label>
              <input type="email" class="form-control" id="soal" placeholder="ketik disini"/>
              <p></p>
              <label for="gandaA" class="form-label">Pilihan ganda a :</label>
              <input type="email" class="form-control" id="gandaA" placeholder="ketik disini"/>
              <p></p>
              <label for="gandaB" class="form-label">Pilihan ganda b :</label>
              <input type="email" class="form-control" id="gandaB" placeholder="ketik disini"/>
              <p></p>
              <label for="gandaC" class="form-label">Pilihan ganda c :</label>
              <input type="email" class="form-control" id="gandaC" placeholder="ketik disini"/>
              <p></p>
              <label for="gandaD" class="form-label">Pilihan ganda d :</label>
              <input type="email" class="form-control" id="gandaD" placeholder="ketik disini"/>
              <p></p>
              <label for="jawaban" class="form-label">Jawaban :</label>
              <input type="email" class="form-control" id="jawaban" placeholder="ketik disini"/>
              <p></p>
              <label for="point" class="form-label">Point :</label>
              <input type="email" class="form-control" id="point" placeholder="ketik disini"/>
              
            </div>
            <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">

            </div>
        </div>
       
    </div>
    )
  }
}

export default CaseCheckBox;