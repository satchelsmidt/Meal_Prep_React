import React, { useEffect, useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap'
import recipeSearch from '../../api/recipeSearch'
import SmallButton from '../../components/SmallButton'
import BigButton from '../../components/BigButton'

export default function AddRecipes(props) {

    const [recipeData, setRecipeData] = useState([])
    const [page, setPage] = useState(1)
    const [currentOffset, setCurrentOffset] = useState(0)
    //TODO: add in random return of recipes so that it's more fun to search

    const renderRecipes = () => {
        return recipeData.map((recipe) => {
            return <Card style={styles.recipeCard} key={recipe.id}>
                <Card.Img variant="top" src={recipe.image} />
                <Card.Body>
                    <Card.Title>{recipe.title}</Card.Title>
                    <Card.Text>Cuisines: {recipe.cuisines.join(', ')}</Card.Text>
                    <Card.Text>Total Time: {recipe.readyInMinutes} minutes</Card.Text>
                    <Card.Text>{<a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">Link to Recipe</a>}</Card.Text>
                    <Button variant="primary" recipedetails={JSON.stringify(recipe)} onClick={(e) => selectRecipe(e)}>Add to Plan</Button>
                </Card.Body>
            </Card>
        })
    }

    const renderNewPage = () => {
        setCurrentOffset(currentOffset + 12)
        setPage(page + 1)
    }

    const renderPrevPage = () => {
        setCurrentOffset(currentOffset - 12)
        setPage(page - 1)
    }

    const selectRecipe = (e) => {
        props.addNewRecipe(JSON.parse(e.target.getAttribute('recipedetails')))

        e.target.setAttribute("disabled", true)
        // e.target.insertAdjacentHTML("afterend", `<Button variant="primary" onClick=${() => removeRecipe()}>Remove from plan</Button>`)
    }

    //TODO: Enable this again
    // function removeRecipe(e) {
    //     console.log('you removed a recipe')
    // }

    useEffect(() => {
        recipeSearch(props.cuisines, props.intolerances, props.diets, currentOffset).then((res) => {
            setRecipeData(res.data.results)
        })
    }, [page, currentOffset, props.cuisines, props.diets, props.intolerances])

    return (
        <Container style={styles.formContainer}>
            <p style={styles.text}>Here are some recipes that fit what you're looking for.</p>
            <p style={styles.text}>Search through the results and add your favorites you to your final plan!</p>
            <br></br>
            <Container style={styles.cardContainer}>
                {renderRecipes()}
            </Container>
            <Container style={styles.buttonsContainer}>
                {currentOffset > 0 && <SmallButton text="View Previous Recipes" onClick={(e) => { renderPrevPage(e) }} />}
                <SmallButton text="View More Recipes" onClick={(e) => { renderNewPage(e) }}></SmallButton>
            </Container>
            <BigButton text="Create Final Plan" onClick={() => { props.handleFormSubmit() }}></BigButton>
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
        'marginTop': '100px',
        'flexDirection': 'column',
        'alignItems': 'center',
        'justifyContent': 'center',
        'overflow': 'auto',
        'height': 'auto',
        'margin': '75px',
        'padding': '20px'
    },
    cardContainer: {
        'display': 'flex',
        'flexWrap': 'wrap',
        'flexDirection': 'row',
        'alignItems': 'center',
        'height': 'auto',
    },
    buttonsContainer: {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        'margin': '20px'
    },
    recipeCard: {
        'padding': '10px',
        'margin': '10px',
        'width': '300px',
    }
}