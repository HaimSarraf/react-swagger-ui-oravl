// src/components/SwaggerUI.js
import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerDocumentation = () => {
    return (
        <div>
            <h1>API Documentation</h1>
            <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />
        </div>
    );
};

export default SwaggerDocumentation;
