import React from '../../../node_modules/@types/react';
import { Container, Dropdown } from '../../../node_modules/react-bootstrap/esm'
import SmallButton from '../../components/SmallButton'
import * as Cuisines from '../../config/cuisines.json'


export default function RecipeTypes(props) {

    const saveAndSubmit = (e) => {
        e.preventDefault()
        props.nextStep()
    }

    const renderCuisinesDropdown = () => {
        return Cuisines.cuisines.map((cuisine) => {
            return <Dropdown.Item onClick={() => selectCuisines(cuisine)}>{cuisine}</Dropdown.Item>
        })
    }

    const selectCuisines = (cuisine) => {
        if (props.cuisines.indexOf(cuisine) < 0) {
            console.log('CUISINE IN FUNCTION: ', cuisine)
            props.addNewCuisine(cuisine)
        }
        else {
            console.log("CUISINE ALREADY IN ARRAY")
        }
    }

    const renderCuisineButtons = () => {
        return props.cuisines.map((cuisine) => {
            return <SmallButton text={cuisine}></SmallButton>
        })
    }

    return (
        <Container style={styles.formContainer}>
            <p style={styles.p}>First, lets pick the recipes you'd like to cook throughout the week.</p>
            <p style={styles.p}>Select the types of cuisine you'd like to search:</p>
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