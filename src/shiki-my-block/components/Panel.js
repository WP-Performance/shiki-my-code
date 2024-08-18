import {
    PanelBody,
    ToggleControl,
    SelectControl,
} from '@wordpress/components'
import {InspectorControls} from '@wordpress/block-editor'
import {__} from '@wordpress/i18n'
import {languages, themes} from '../options'

const Panel = ({props}) => {
    const {attributes, setAttributes} = props
    const {lang, showNumber, themeLight, themeDark} = attributes

    return (
        <InspectorControls>
            <PanelBody title={__('Lines numbers', 'shiki-my-code')}>
                <ToggleControl
                    label={__('show number lines', 'shiki-my-code')}
                    checked={showNumber}
                    onChange={() => setAttributes({showNumber: !showNumber})}
                />
            </PanelBody>
            <PanelBody title={__('Language', 'shiki-my-code')}>
                <SelectControl
                    label={__('Language', 'shiki-my-code')}
                    value={lang}
                    options={languages}
                    onChange={(lang) => setAttributes({lang})}
                />
            </PanelBody>
            <PanelBody title={__('Theme', 'shiki-my-code')}>
                <SelectControl
                    label={__('Theme Light', 'shiki-my-code')}
                    value={themeLight}
                    options={[...themes['light'], ...themes['dark']]}
                    onChange={(themeLight) => setAttributes({themeLight})}
                /><SelectControl
                label={__('Theme Dark', 'shiki-my-code')}
                value={themeDark}
                options={themes['dark']}
                onChange={(themeDark) => setAttributes({themeDark})}
            />
            </PanelBody>
            <PanelBody title={__('Highlight', 'shiki-my-code')}>
                <div>
                    <p>{__('Add this comment in your code for highlight', 'shiki-my-code')}</p>
                    <p>
                        <strong>{__('Notation Diff', 'shiki-my-code')}</strong>:<br/><code>//
                        [!code --]</code> or <code>// [!code ++]</code>
                    </p>
                    <p>
                        <strong>{__('Notation Highlight', 'shiki-my-code')}</strong>:<br/><code>//
                        [!code highlight]</code> or <code>// [!code
                        highlight:3]</code>
                    </p>
                    <p>
                        <strong>{__('Word Highlight', 'shiki-my-code')}</strong>:<br/><code>//
                        [!code word:hello]]</code> or <code>// [!code
                        word:Hello:1]</code>
                    </p>
                    <p>
                        <strong>{__('Notation Focus', 'shiki-my-code')}</strong>:<br/><code>//
                        [!code focus]</code> or <code>// [!code focus:3]</code>
                    </p>
                </div>
            </PanelBody>
        </InspectorControls>
    )
}

export default Panel
