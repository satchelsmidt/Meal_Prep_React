import React from 'react';
import { Container, Dropdown, Badge } from 'react-bootstrap'
import SmallButton from '../../components/SmallButton'
import * as Cuisines from '../../config/cuisines.json'

export default function RecipeTypes(props) {

    const saveAndSubmit = (e) => {
        e.preventDefault()
        props.nextStep()
    }

    const renderCuisinesDropdown = () => {
        return Cuisines.cuisines.map((cuisine, index) => {
            return <Dropdown.Item key={index} onClick={() => selectCuisines(cuisine)}>{cuisine}</Dropdown.Item>
        })
    }

    const selectCuisines = (cuisine) => {
        if (props.cuisines.indexOf(cuisine) < 0) {
            props.addNewCuisine(cuisine)
        }
        else {
            console.log("CUISINE ALREADY IN ARRAY")
        }
    }

    const renderCuisineButtons = () => {
        return props.cuisines.map((cuisine, index) => {
            return <Badge key={index} variant="primary" style={styles.badgeStyle}>{cuisine}</Badge>
        })
    }

    return (
        <Container style={styles.formContainer}>
            <p style={styles.text}>Now that we have the days and times for your plan figured out, let's look for some recipes</p>
            <p style={styles.text}>First, choose the type(s) of cuisine you want to cook:</p>
            <Container style={styles.innerContainer}>
                <Container style={styles.innerInnerContainer}>
                    <Dropdown >
                        <Dropdown.Toggle variant="success" id="dropdown-basic" style={styles.dropdown}>
                            Cuisines
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {/* TODO: make this functional */}
                            {/* <Dropdown.Item href="#/action-1">Surprise Me!</Dropdown.Item> */}
                            {/* <Dropdown.Divider /> */}
                            {renderCuisinesDropdown()}
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
                <Container style={styles.innerInnerContainer}>
                    {renderCuisineButtons()}
                </Container>
            </Container>
            <Container style={styles.rowContainer}>
                <SmallButton text="Previous Step" onClick={() => { props.prevStep() }}></SmallButton>
                <SmallButton text="Next Step" onClick={(e) => { saveAndSubmit(e) }}></SmallButton>
            </Container>
        </Container>
    );
}

const styles = {
    text: {
        'textAlign': 'center',
        'color': 'white'
    },
    formContainer: {
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'justifyContent': 'center',
        'width': '60%',
        'margin': '75px',
        'padding': '20px'
    },
    innerContainer: {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between',
        'margin': '10px'
    },
    innerInnerContainer: {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        'width': '50%',
        'margin': '0',
        'padding': '0',
        'flexWrap': 'wrap'
    },
    dropdown: {
        'width': '200px'
    },
    rowContainer: {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-around',
    },
    badgeStyle:{
        'margin': '5px'
    }
}