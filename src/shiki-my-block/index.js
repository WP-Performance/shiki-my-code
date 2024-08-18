import {registerBlockType} from '@wordpress/blocks';
import {createBlock} from '@wordpress/blocks';
import {code as icon} from '@wordpress/icons';

/**
 * Internal dependencies
 */
import Edit from './edit';
import metadata from './block.json';

import './style.scss';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
    icon,
    transforms: {
        from: [
            {
                type: 'block',
                blocks: ['core/code'],
                transform: ({content}) => {
                    return createBlock('wpperformance/shiki-my-code', {
                        content,
                    });
                },
            },
            {
                type: 'block',
                blocks: ['wp-performance/prism-my-code'],
                transform: ({content}) => {
                    return createBlock('wpperformance/shiki-my-code', {
                        content,
                    });
                },
            },
        ]
    },
    edit: Edit,
});
