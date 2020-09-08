import React from 'react';
import { Container, Dropdown } from 'react-bootstrap'
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
            return <SmallButton key={index} text={cuisine}></SmallButton>
        })
    }

    return (
        <Container style={styles.formContainer}>
            <p style={styles.p}>Now that we have the days and times for your plan figured out, let's look for some recipes</p>
            <p style={styles.p}>First, choose the type(s) of cuisine you want to cook:</p>
            <Container style={styles.innerContainer}>
                <Container style={styles.innerInnerContainer}>
                    <Dropdown >
                        <Dropdown.Toggle variant="success" id="dropdown-basic"
                            style={styles.dropdown}
                        >
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
            <SmallButton text="Back" onClick={() => { props.prevStep() }}></SmallButton>
            <SmallButton text="Next" onClick={(e) => { saveAndSubmit(e) }}></SmallButton>
        </Container>
    );
}

const styles = {
    p: {
        'textAlign': 'center',
        'color': 'white'
    },
    formContainer: {
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'justifyContent': 'center',
        'height': '400px'
    },
    innerContainer: {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between',
    },
    innerInnerContainer: {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        'width': '50%',
        'margin': '0',
        'padding': '0'
    },
    dropdown: {
        'width': '200px'
    }
}