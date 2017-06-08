// @flow
const React = require('react');
const Dialog = require('react-toolbox/lib/dialog').default;
const DialogBody = require('./DialogBody');

class TestApp extends React.Component {
    state: {
        isOpen: boolean,
    }
    close: Function
    constructor(props: Object) {
        super(props);
        this.state = {
            isOpen: true,
        };
        this.close = this.close.bind(this);
    }
    close() {
        this.setState({
            isOpen: false,
        });
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.setState({isOpen: true})}>Open Dialog</button>
                <Dialog
                    active={this.state.isOpen}
                    onEscKeyDown={this.close}
                    onOverlayClick={this.close}
                >
                    <DialogBody onClose={this.close} />
                </Dialog>
            </div>
        );
    }
}

module.exports = TestApp;
