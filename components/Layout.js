import React from 'react';
import Header from './Header';
import Head from 'next/head';
import { Container } from 'semantic-ui-react';

export default (props) => {
    return (
        <div>
            <Container>
                <Head>
                <link
                    async
                    rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.0.0/dist/semantic.min.css" /
                >
                </Head>
                
                <Header />
                {props.children}
            </Container>
        </div>
    );
};