import React from 'react';

class Card extends React.Component {
    render() {
        const image = `images/fatherhood/${this.props.name}.jpg`;
        return (
            <div class="col-md-4 pb-3">
                <a href="#"><img src={image} alt={this.props.name} class="img-fluid pb-2" /></a>
                <p class="section-header mb-2">Q&A with Father</p>
                <h2 class="my-2">{this.props.name}</h2>
                <p class="mb-0">Nominated by {this.props.nominated}</p>
                <p class="publication-date">Published on {this.props.published}</p>
            </div>
        )
    }
}

export default Card;