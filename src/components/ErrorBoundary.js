import React, { useState } from 'react';

const ErrorBoundary = ({ children }) => {
    const [hasError, setHasError] = useState(false);

    const handleOnError = (error, errorInfo) => {
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
        // Optionally, you can log the error to an error reporting service

        // Set hasError to true to display the fallback UI
        setHasError(true);
    };

    if (hasError) {
        return <h2>Something went wrong. Please try again later.</h2>;
    }

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
};

export default ErrorBoundary;
