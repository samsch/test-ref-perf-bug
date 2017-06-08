// @flow
const React = require('react');
const Input = require('react-toolbox/lib/input').default;

class DialogBody extends React.Component {
    inputRef: Object
    setRef: Function
    constructor(props: {onClose: Function}) {
        super(props);
        this.setRef = this.setRef.bind(this);
    }
    componentDidMount() {
        this.inputRef.focus();
    }
    setRef(ref: Object) {
        this.inputRef = ref.getWrappedInstance();
    }
    render() {
        return (
            <div>
                <Input
                    type="text"
                    ref={this.setRef}
                />
                <button type="button" onClick={this.props.onClose}>Close Dialog</button>
            </div>
        );
    }
}

module.exports = DialogBody;
