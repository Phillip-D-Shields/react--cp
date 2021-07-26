import React from 'react'

const Column = (props) => {
    return (
        <section className="mv3 pa2 flex flex-column justify-around items-center">
            {props.children}
        </section>
    )
}

export default Column
