import React, { useEffect, useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap'
import recipeSearch from '../../api/recipeSearch'
import SmallButton from '../../components/SmallButton'


export default function AddRecipes(props) {

    const [recipeData, setRecipeData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const [page, setPage] = useState(1)

    // const renderRecipes = (cuisines, restrictions) => {
    //     recipeSearch(props.cuisines, props.intolerances, props.diets).then((res) => {
    //         return res.data.results.map((recipe)=>{
    //             // console.log('This is the recipes: ', recipe.title)
    //             return <h2>HELLO</h2>
    //             // return <h2>{recipe.title}</h2>
    //         })
    //         // console.log('This is the RESPONSE: ', res)
    //     })
    // }

    const renderRecipes = () => {
        return recipeData.map((recipe) => {
            return <Card style={styles.recipeCard}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
              </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        })
    }

    const renderNewPage = () => {
        //when user clicks next page, we increment page var and modify the state
        setPage(page + 1)
    }

    // return props.diets.map((diet) => {
    //     return <SmallButton text={diet}></SmallButton>
    // })

    //TODO: make this, work again
    useEffect(() => {
        // console.log(recipeSearch)
        recipeSearch(props.cuisines, props.intolerances, props.diets).then((res) => {
            console.log('This is the RESPONSE: ', res)
            setRecipeData(res.data.results)
        })
    }, [page])

    return (
        <Container style={styles.formContainer}>
            <p style={styles.p}>These are some recipes that fit what you're looking for. </p>

            <p style={styles.p}>This is where you can add the recipes you'd like to cook to your final prep plan!</p>
            <Container style={styles.cardContainer}>

                {renderRecipes()}
            </Container>

            <SmallButton text="Next" onClick={(e) => { renderNewPage(e) }}></SmallButton>

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
    recipeCard: {
        'padding': '10px',
        'margin': '10px',
        'width': '300px',
    }
}