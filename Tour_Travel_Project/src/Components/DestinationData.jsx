import "./Destination.css"
import { Component } from "react"

class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="text-des">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="img-des">
                    <img 
                    src = {this.props.img1}
                    alt="Taal Volcano" />
                    <img 
                    src = {this.props.img2}
                    alt="lake img" />
                </div>
            </div>
        )
    }
}

export default DestinationData;