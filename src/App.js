import React from 'react'
import Shuffle from 'shuffle-array'
import Cards from './components/Cards'
import Wrapper from './components/Wrapper'
import images from './images.json'



class App extends React.Component {

    state = {
        images: images,
        score: 0
    }
    updateImage = (id, clicked) => {


        var images = Shuffle(this.state.images);


        if (!clicked) {
            var newScore = this.state.score + 1
            
            for (var i = 0; i < this.state.images.length; i++) {

                if(id === this.state.images[i].id) {
                    images[i].clicked = true

                }
            }

        } else {
            var newScore = 0

            for (var i = 0; i < this.state.images.length; i++) {

                    images[i].clicked = false

                
            }

        }

        this.setState({ images: images, score: newScore });

    }
    render() {
        return (
            <Wrapper score={this.state.score}>
                {this.state.images.map(element => (
                    <li key={element.id}>
                        <Cards image={element.image} id={element.id} clicked={element.clicked} updateImage={this.updateImage} />
                    </li>
                ))}

            </Wrapper>
        )
    }

}

export default App;