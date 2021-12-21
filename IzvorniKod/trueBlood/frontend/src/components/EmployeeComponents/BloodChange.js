import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

function BloodChange(props) {

    const [bloodList, setBloodList] = React.useState(
        [
            {bloodType: 'fdg', amount: 3, amountToSend: 0, amountAfterSending: 3},
            {bloodType: 'fdf', amount: 3, amountToSend: 0, amountAfterSending: 3},
            {bloodType: 'fdgfdg', amount: 3, amountToSend: 0, amountAfterSending: 3},
            {bloodType: 'dfd', amount: 3, amountToSend: 0, amountAfterSending: 3},
            {bloodType: 'A_PgfgLUS', amount: 3, amountToSend: 0, amountAfterSending: 3},
            {bloodType: 'gddfdfgd', amount: 2, amountToSend: 0, amountAfterSending: 2},
            {bloodType: 'A_dfdfPLUS', amount: 3, amountToSend: 0, amountAfterSending: 3},
            {bloodType: 'dfdf', amount: 3, amountToSend: 0, amountAfterSending: 3},
        ]
    )

    const [exportDescription, setExportDescription] = React.useState({receiver:"", details:""})

    const [error, setError] = React.useState("");

    function onSubmit() {

    }

    function onChange(event) {
        
        let index = bloodList.findIndex((element)=>element.bloodType === event.target.name)
        let newBloodList = [... bloodList];
        newBloodList[index].amountToSend = event.target.value;
        newBloodList[index].amountAfterSending = newBloodList[index].amount - newBloodList[index].amountToSend
        setBloodList(newBloodList);
        console.log(bloodList.length)
        
    }

    function onChangeExportDescription(event) {
        let newExportDescription = {...exportDescription};
        newExportDescription[event.target.name] = event.target.value;
        setExportDescription(newExportDescription);
    }

    return(
        
        <div>
            <div className="container col-md-4 col-md-offset-4 border border-danger rounded">
            <Form className="mt-3 mb-3" onSubmit={onSubmit}>

                {[0,1,2,3].map(index_i => 
                    
                    <Row className="mb-2">
                        {[0,1].map(index_j => 
                            <Form.Group as={Col} md="6">
                            <Form.Label><b>{bloodList[index_i*2 + index_j].bloodType}</b> - količina: {bloodList[index_i*2  + index_j].amount}, nakon slanja: {bloodList[index_i*2  + index_j].amountAfterSending} <span hidden={bloodList[index_i*2  + index_j].amountAfterSending >= 0}>OPREZ!!</span> </Form.Label>
                            <Form.Control 
                                name={bloodList[index_i*2  + index_j].bloodType}
                                value={bloodList[index_i*2  + index_j].amountToSend === 0 ? "" : bloodList[index_i*2  + index_j].amountToSend }
                                onChange={onChange}
                                placeholder="Upiši koliko se jedinica šalje"  
                            />
                            </Form.Group>
                        )}
                    </Row>
                )}

                    <Row className="mb-3">
                        <Form.Group as={Col} md="12">
                            <Form.Label>Primatelj: </Form.Label>
                            <Form.Control 
                                required
                                type="text"
                                name="receiver"
                                value={exportDescription.receiver}
                                onChange={onChangeExportDescription}  
                                placeholder="Primatelj"
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12">
                            <Form.Label>Detalji: </Form.Label>
                            <Form.Control 
                                required
                                type="text"
                                name="details"
                                value={exportDescription.details}
                                onChange={onChangeExportDescription}  
                                placeholder="Upiši neke dodatne detalje"
                            />
                        </Form.Group>
                    </Row>   
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6">
                            <Button className="btn-danger" type="submit">
                                Evidentiraj promjenu
                            </Button>
                            <div>{error}</div>
                        </Form.Group>
                     </Row>

            </Form>
                
            </div>
        </div>
       
    )
}

export default BloodChange;