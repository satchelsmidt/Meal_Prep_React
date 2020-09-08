import React from 'react';
import { Container, Dropdown, Badge } from 'react-bootstrap'
import SmallButton from '../../components/SmallButton'
import * as Restrictions from '../../config/restrictions.json'

export default function RecipeRestrictions(props) {

    const renderDietsDropdown = () => {
        return Restrictions.diets.map((diet, index) => {
            return <Dropdown.Item key={index} onClick={() => selectDiets(diet)}>{diet}</Dropdown.Item>
        })
    }

    const renderIntolerancesDropdown = () => {
        return Restrictions.intolerances.map((intolerance, index) => {
            return <Dropdown.Item key={index} onClick={() => selectIntolerances(intolerance)}>{intolerance}</Dropdown.Item>
        })
    }

    const selectDiets = (diet) => {
        if (props.diets.indexOf(diet) < 0) {
            props.addNewDiet(diet)
        }
        else {
            console.log("DIET ALREADY IN ARRAY")
        }
    }

    const selectIntolerances = (intolerance) => {
        if (props.intolerances.indexOf(intolerance) < 0) {
            props.addNewIntolerance(intolerance)
        }
        else {
            console.log("RESTRICTION ALREADY IN ARRAY")
        }
    }

    const renderIntoleranceButtons = () => {
        return props.intolerances.map((intolerance, index) => {
            return <Badge key={index} variant="primary" style={styles.badgeStyle}>{intolerance}-free</Badge>
        })
    }

    const renderDietButtons = () => {
        return props.diets.map((diet, index) => {
            return <Badge key={index} variant="primary" style={styles.badgeStyle}>{diet}</Badge>
        })
    }

    return (
        <Container style={styles.formContainer}>
            <p style={styles.text}>Select any dietary plans or restrictions you'd like your recipes to follow:</p>
            <Container style={styles.innerContainer}>
                <Container style={styles.innerContainerDropdown}>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" style={styles.dropdown}>
                            Diets
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">None</Dropdown.Item>
                            <Dropdown.Divider />
                            {renderDietsDropdown()}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" style={styles.dropdown}>
                            Intolerances
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {renderIntolerancesDropdown()}
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
                <Container style={styles.innerContainerButtons}>
                    {renderIntoleranceButtons()}
                    {renderDietButtons()}
                </Container>
            </Container>
            <Container style={styles.rowContainer}>
                <SmallButton text="Previous Step" onClick={() => { props.prevStep() }}></SmallButton>
                <SmallButton text="Search for Recipes!" onClick={(e) => { props.nextStep(e) }}></SmallButton>
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
    innerContainerDropdown: {
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'justifyContent': 'center',
        'width': '50%',
        'margin': '0',
        'padding': '0'
    },
    innerContainerButtons: {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        'width': '50%',
        'margin': '0',
        'padding': '0'
    },
    dropdown: {
        'width': '200px',
        'margin': '10px'
    },
    rowContainer: {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-around',
    },
    badgeStyle: {
        'margin': '5px'
    }
}