import React, { useEffect, useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap'
import recipeSearch from '../../api/recipeSearch'
import SmallButton from '../../components/SmallButton'


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
                    <Card.Text>
                        Cuisines: {recipe.cuisines.join(', ') + '\n'}
                        Cook Time: {recipe.readyInMinutes + '\n'}
                        <a href={recipe.sourceUrl} target="_blank">Link to Recipe</a>
                    </Card.Text>
                    {/* <Button variant="primary" onClick={(e)=>addRecipe(e)} ref="btn">Add to Plan</Button> */}
                    <Button variant="primary" onClick={(e) => addRecipe(e)}>Add to Plan</Button>
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

    function addRecipe(e) {
        console.log('the button that we clicked maybe: ', e.target)
        e.target.setAttribute("disabled", true)
        e.target.insertAdjacentHTML("afterend", `<Button variant="primary">Hello I am button</Button>`)
    }

    useEffect(() => {
        recipeSearch(props.cuisines, props.intolerances, props.diets, currentOffset).then((res) => {
            setRecipeData(res.data.results)
        })
    }, [page])

    return (
        <Container style={styles.formContainer}>
            <p style={styles.p}>These are some recipes that fit what you're looking for. </p>
            <br></br>
            <p style={styles.p}>This is where you can add the recipes you'd like to cook to your final prep plan!</p>
            <Container style={styles.cardContainer}>
                {renderRecipes()}
            </Container>
            <Container style={styles.buttonsContainer}>
                {currentOffset > 0 && <SmallButton text="Previous" onClick={(e) => { renderPrevPage(e) }} />}
                <SmallButton text="Next" onClick={(e) => { renderNewPage(e) }}></SmallButton>
            </Container>
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
        'marginTop': '100px',
        'flexDirection': 'column',
        'alignItems': 'center',
        'justifyContent': 'center',
        'overflow': 'auto',
        'height': 'auto',
    },
    cardContainer: {
        'display': 'flex',
        'flex-wrap': 'wrap',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between',
        'overflow': 'auto',
        'height': 'auto',
    },
    buttonsContainer: {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
    },
    recipeCard: {
        'padding': '10px',
        'margin': '10px',
        'width': '300px',
    }
}