import React from 'react';
import PropTypes from 'prop-types';

export const withElistBase = (BaseComponent) => {
 class ElistBase extends React.Component {
    static propTypes = {
        oe: PropTypes.array,
        renderMode: PropTypes.number,
        fr: PropTypes.object.isRequired,
    };

    static defaultProps = {
        oe: [],
        renderMode: 0,
    };

    eSubmitForm() {
        return this.props.fr.eSubmitForm();
    }

    submitForm() {
        return this.props.fr.submitForm();
    }

    submitForm2(service) {
        return this.props.fr.submitForm2(service);
    }

    skipForm(service, name, value) {
        return this.props.fr.skipForm(service, name, value);
    }

    closeWindow(service) {
        return this.props.fr.closeWindow(service);
    }

    paramsCopy() {
        return this.props.fr.paramsCopy();
    }

    _dialog(...args) {
        console.log(args)
        return this.props.fr._dialog(...args);
    }

    _gridClasses(el) {
        if (!el.sectionSize) {
            return '24|24|24';
        }
        return <BaseComponent {...this.props} base={this} />;
    }

    render() {
        throw new Error('extending must override render');
    }
}
return ElistBase;
}