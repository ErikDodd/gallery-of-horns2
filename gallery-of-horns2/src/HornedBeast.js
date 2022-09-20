import React from "react";

class HornedBeast extends React.Component {
    render() {
        return(
            <>
                <img 
                    src={this.props.src}
                    alt={this.props.alt}
                    title={this.props.title}
                />
                <p> Description of Horned Beast </p>
            </>
        )
    }
}


export default HornedBeast;