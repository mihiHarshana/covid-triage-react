import * as React from "react";
import {FormControl, InputGroup} from "react-bootstrap";

class PatientDetails extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-3'>
                    <div className='row'>
                        <div className='col-2'>



                        </div>

                    </div>




                </div>
                <div className='col-4'>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">NIC</InputGroup.Text>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>


                </div>
                <div className='col-3'>





                </div>
                <div className='col-3'>





                </div>
            </div>

        )
    }
}
export default  PatientDetails;