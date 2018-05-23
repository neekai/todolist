import React from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsernameInput(e) {
        this.setState({
            username: e.target.value
        })
    }

    handlePasswordInput(e) {
        this.setState({
            password: e.target.value
        })
    }

    handlSubmit(e) {

    }

    render() {
        return (
            <div>
                <h1>Welcome to your To-do List!</h1>
                <h2>Sign Up</h2>
                <form method="post">
                    Username: <input type="text" />
                    Password: <input type="text" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default SignUp;