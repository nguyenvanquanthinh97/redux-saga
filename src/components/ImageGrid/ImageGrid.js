import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../actions';
import './styles.css';
import Spinner from '../Spinner/Spinner';

class ImageGrid extends Component {
    componentDidMount() {
        this.props.loadImages();
    }

    render() {
        const { images, error, isLoading } = this.props;
        return (
            <div className="content">
                {isLoading && <Spinner />}
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                </section>
                {error && <h1>{error}</h1>}
                <a onClick={this.props.loadImages}>Click me to fetch Saga</a>
            </div>
        );
    }
}

ImageGrid.propTypes = {
    isLoading: PropTypes.bool,
    images: PropTypes.array,
    error: PropTypes.string,
    loadImages: PropTypes.func
};

const mapStateToProps = state => ({
    isLoading: state.images.loading,
    images: state.images.images,
    error: state.images.error
});

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(actions.loadImages())
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
