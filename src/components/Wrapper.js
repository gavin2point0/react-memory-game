import React from 'react'

const Wrapper = (props) => (
    <div class="wrapper">
    <header>{props.score}</header>
        <ul>
            {props.children}
        </ul>
        <footer>footer</footer>
    </div>
)

export default Wrapper