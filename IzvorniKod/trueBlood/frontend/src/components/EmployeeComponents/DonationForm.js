import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import {useHistory} from "react-router-dom";

function DonationForm(props) {

    const questionsList = [
        'Težina je ispod 55kg?',
        'Temperatura je iznad 37c?',
        'Krvni tlak: sistolični ispod 100 ili iznad 180 mm Hg, dijastolični ispod 60 ili iznad 110 mm Hg?',
        'Puls: ispod 50 ili iznad 100 otkucaja u minuti', 
        'Hemoglobin: muškarci ispod 135 g/L, žene ispod 125 g/L',
        'Osoba trenutno uzima antibiotike ili druge lijekove',
        'Osoba je konzumirale alkoholna pića unutar 8 sati prije darivanja krvi',
        'Osoba s lakšim akutnim bolesnim stanjima (prehlade, poremetnje probavnog sustava, smanjenog željeza u krvi i sl.)',
        'Žene za vrijeme menstruacije, trudnoće i dojenja',
        'Osoba tog dana obavlja opasne poslove (rad na visini, dubini)',
        'Osoba je bolovale ili sada boluju od teških kroničnih bolesti dišnog i probavnog sustava',
        'Osoba boluje od bolesti srca i krvnih žila, zloćudnih bolesti, bolesti jetre, AIDS-a, šećerne bolesti (osobe liječene inzulinskom terapijom), živčanih i duševnih bolesti',
        'Osoba je ovisnik o alkoholu ili drogama',
        'Muškarci koji su u životu imali spolne odnose s drugim muškarcima',
        'Osobe koje često mijenjaju seksualne partnere (promiskuitetne osobe)',
        'Žene i muškarci koji su imali spolni odnos s prostitutkama',
        'Osobe koje su uzimale drogu intravenskim putem',
        'Osobe koje su liječene zbog spolno prenosivih bolesti (sifilis, gonoreja)',
        'Osobe koje su HIV-pozitivne',
        'Seksualni partneri gore navedenih osoba'
    ]

    const indexes = [];
    for(let i = 0; i < questionsList.length; i++) {
        indexes.push(i)
    }


    const [donorDataForm, setDonorDataForm] = React.useState(props.donorData);

    const [questionsForm, setQuestionsForm] = React.useState(() => {
        let temp = []; 
        for(let i = 0; i < questionsList.length; i++) {
            temp.push('Ne')
        }

        return temp;
    });
    

    
    React.useEffect( () => {
        setDonorDataForm(props.donorData)
    }, [props.donorData])  //Valentin je rekao da je ovo nepreproruciljivo rjesenje, ali radi

    const [donationDetails, setDonationDetails] = React.useState("");

    function onChangeDonationDetails(event) {
        setDonationDetails(event.target.value)
    }

    function onChange(event) {

        
        const {name, value} = event.target;
        let newForm = { ... donorDataForm };
        newForm[name] = value;
        
        setDonorDataForm(newForm);
        

    }

    function onChangeQuestionsForm(event) {
        
        let newQuestionsForm = [... questionsForm]
        newQuestionsForm[event.target.name] = event.target.value;
        setQuestionsForm(newQuestionsForm);
        console.log(newQuestionsForm)
      
    }

    function onSubmit() {

    }

    return (
        <div>
            <div className="container col-md-4 col-md-offset-4 border border-danger rounded">
                <Form className="mt-3 mb-3" onSubmit={onSubmit}>
                    
                        {indexes.map(index =>
                            <Row className="mb-3"> 
                                <Form.Group as={Col} md="6">
                                    <Form.Label>{questionsList[index]}</Form.Label>
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                        <Form.Select
                                            name={index}
                                            onChange={onChangeQuestionsForm}
                                            value={questionsForm[index]}
                                            
                                        >
                                            <option value='Da'>Da</option>
                                            <option value='Ne'>Ne</option>
                                            
                                        </Form.Select>
                                </Form.Group>
                            </Row>
                        )}
                        
                    
                    <Row className="mb-2">
                        <Form.Group as={Col} md="6">
                            <Form.Label>First name</Form.Label>
                            <Form.Control 
                
                                type="text"
                                name="givenName"
                                value={donorDataForm.givenName}
                                disabled
                                

                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control 
                                
                                type="text"
                                name="familyName"
                                value={donorDataForm.familyName}
                                disabled
                            
                       
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-2">
                        <Form.Group as={Col} md="6">
                            <Form.Label>OIB: </Form.Label>
                            <Form.Control 
                
                                type="text"
                                name="OIB"
                                value={donorDataForm.OIB}
                                disabled
                                

                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Krvna grupa: </Form.Label>
                            <Form.Control 
                                
                                disabled
                                type="text"
                                name="bloodType"
                                value={donorDataForm.bloodType}
                       
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12">
                            <Form.Label>Detalji: </Form.Label>
                            <Form.Control 
                                type="text"
                                name="details"
                                value={donationDetails}
                                onChange={onChangeDonationDetails}  
                                placeholder="Upiši neke dodatne detalje"
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Button className="btn-danger" type="submit">
                            Evidentiraj donaciju
                        </Button>
                    </Form.Group>
                </Row>
                  
                </Form>
            </div>
        </div>
    )
}

export default DonationForm

