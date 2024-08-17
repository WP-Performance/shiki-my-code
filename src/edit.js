import {__} from '@wordpress/i18n';
import {RichText, useBlockProps} from '@wordpress/block-editor';
import {createBlock, getDefaultBlockName} from '@wordpress/blocks';
import {useEffect, useState} from '@wordpress/element';
// controls
import Panel from "./panel";
import Control from "./control";
// shiki
import {
    codeToHtml, BundledLanguage,
    BundledTheme,
} from "shiki/bundle/web";
import {
    transformerNotationDiff,
    transformerNotationHighlight,
    transformerNotationFocus,
    transformerNotationWordHighlight
} from '@shikijs/transformers';

import './style.scss';

export default function CodeEdit({
                                     attributes,
                                     setAttributes,
                                     onRemove,
                                     insertBlocksAfter,
                                     mergeBlocks,
                                 }) {

    const [mode, setMode] = useState('view')

    useEffect(() => {
        async function highlightCode(_content) {
            // replace &lt; to <
            const _c = _content?.replace(/&lt;/g, '<');
            const code = await codeToHtml(_c, {
                lang: attributes.lang,
                themes: {
                    light: attributes.themeLight,
                    dark: attributes.themeDark
                },
                transformers: [
                    transformerNotationDiff(),
                    transformerNotationHighlight(),
                    transformerNotationFocus(),
                    transformerNotationWordHighlight(),
                ]
            })
            setAttributes({contentHighlight: code})
        }

        highlightCode(attributes.content)
    }, [attributes.content, attributes.lang, attributes.themeLight, attributes.themeDark])

    const blockProps = useBlockProps({
        className: attributes.showNumber ? 'shiki-line-numbers' : '',
    });
    return (
        <>
            <Panel props={{attributes, setAttributes}}/>
            <Control mode={mode} setMode={setMode}/>
            {mode === 'edit' ? (
                <pre {...blockProps}>
            <RichText
                tagName="code"
                identifier="content"
                value={attributes.content}
                onChange={(content) => {
                    setAttributes({content})
                }}
                allowedFormats={[]}
                onRemove={onRemove}
                onMerge={mergeBlocks}
                placeholder={__('Write code…')}
                aria-label={__('Code')}
                preserveWhiteSpace
                __unstablePastePlainText
                __unstableOnSplitAtDoubleLineEnd={() =>
                    insertBlocksAfter(createBlock(getDefaultBlockName()))
                }
            />
		</pre>
            ) : (
                <div
                    {...blockProps}
                    dangerouslySetInnerHTML={{__html: attributes.contentHighlight}}></div>
            )}
        </>
    );
}
