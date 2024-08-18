import domReady from '@wordpress/dom-ready';
import {createRoot} from '@wordpress/element';
import Panel from './components/Panel';

import './style.css';

domReady(() => {
    const root = createRoot(
        document.getElementById('wpperformance_shiki_my_code_settings')
    );

    root.render(<Panel/>);
});
