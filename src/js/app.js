import React from 'react';
import ReactDOM from 'react-dom';
import '../sass/style.scss';

import store from './SampleStore';
import HelloWorld from './HelloWorld';

ReactDOM.render(<HelloWorld store={store} />, document.getElementById('root'));
