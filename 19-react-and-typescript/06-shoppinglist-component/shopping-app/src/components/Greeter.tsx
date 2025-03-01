import React, { JSX } from 'react';

// First pattern of using props
// function Greeter(props: {person: string}): JSX.Element {
//     return <h1>Hello, {props.person}!</h1>
// }

// Second pattern of using props
interface GreeterProps {
    person: string
}

function Greeter({person}: GreeterProps): JSX.Element {
    return <h1>Hello, {person}!</h1>
}

export default Greeter;
