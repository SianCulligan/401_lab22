  
import React from 'react';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Counter from './components/Counter.js';

import "./styles/styles.scss";
import "./styles/header.scss"
import "./styles/footer.scss"
import "./styles/counter.scss"

//REMEMBER: npm test --updateSnapshot

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Counter />
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;