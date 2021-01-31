import { render } from '@testing-library/react';
import React from 'react'
import CaseCheckBox from './CaseCheckBox';
import CaseRadio from './CaseRadio';
import CaseTextArea from './CaseTextArea';

const options = [
    {
        label: "Pilihlah satu",
        value: "pilih",
    },
    {
        label: "Radio Button",
        value: "radio",
    },
    {
        label: "Check Box",
        value: "checkbox",
    },
    {
        label: "Text Area",
        value: "textarea",
    },
];

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pilihan: "pilih"
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {

        this.setState({ pilihan: e.target.value });

        
            
                switch (e.target.value) {
                    case "radio":
                        render(<CaseRadio/>);                         
                        break;

                    case "checkbox":
                        render(<CaseCheckBox/>)
                        break;

                    case "textarea":
                        render(<CaseTextArea/>)
                        break;
            }
        
            
        

    }



    render() {
        return (
            <div id="App">
                <div className="select-container" >
                    <select value={this.state.pilihan} onChange={this.handleChange}>
                        {options.map((option) => (
                            <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
            </div>
        );
    }
}

export default Select;