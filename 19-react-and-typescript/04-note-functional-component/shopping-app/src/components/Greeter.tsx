import React, { JSX } from 'react';

// Current way of writing a function component (FC)
function Greeter(): JSX.Element {
    return <h1>Hello!</h1>
}

// Older (alternative) way of writing a function component (FC)
// const Greeter: React.FC = () => {
//     return <h1>Hello!</h1>
// }

export default Greeter;
