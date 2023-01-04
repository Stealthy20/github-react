import React from "react";

class StatefulGreetingWithCallback extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0,
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
          console.log("Previous State:", prevState);
          console.log("Previous Props:", prevProps);
          return {
            introduction:
              prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
            buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
          };
        });
    }

    incrementCount() {
        this.setState((prevState, prevProps) => {
            console.log("Previous State:", prevState);
            console.log("Previous Props:", prevProps);
            return {
              count: prevState.count + 1,
            };
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.incrementCount()}>Count</button>
            </div>
        )
    }
}

export default StatefulGreetingWithCallback;