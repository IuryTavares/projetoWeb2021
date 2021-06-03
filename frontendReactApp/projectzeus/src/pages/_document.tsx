import Document, {Html, Head, Main, NextScript} from 'next/document';

import {BrowserRouter as Router} from 'react-router-dom'
import { Bar } from '../components/Bar';

export default class MyDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Nunito+Sans:wght@400;600;700;800&family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet"/>
                </Head>
                
                <body> 
                    <Main/>
                    <NextScript />
                </body>
            </Html>
        );
    }
}