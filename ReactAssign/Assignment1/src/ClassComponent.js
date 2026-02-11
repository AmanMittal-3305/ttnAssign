import React from "react";
import './App.css';

class ClassComponent extends React.Component {
    render() {
        const { firstName } = this.props;

        return (
            <div>
                <h3>Class Component</h3>
                <div>FirstName : {firstName}</div>
            </div>
        );
    }
}

export { ClassComponent };
