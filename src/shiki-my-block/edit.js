import {__} from '@wordpress/i18n';
import {Spinner} from '@wordpress/components';
import {RichText, useBlockProps} from '@wordpress/block-editor';
import {createBlock, getDefaultBlockName} from '@wordpress/blocks';
// controls
import Panel from "./components/Panel";
import Control from "./components/Control";
// hooks
import useHighlighter from "./hooks/useHighlighter";


export default function CodeEdit({
                                     attributes,
                                     setAttributes,
                                     onRemove,
                                     insertBlocksAfter,
                                     mergeBlocks,
                                 }) {


    const {isReady, mode, setMode} = useHighlighter({attributes, setAttributes})

    const blockProps = useBlockProps({
        className: attributes.showNumber ? 'shiki-line-numbers' : '',
    });

    if (!isReady) {
        return <div style={{textAlign: 'center'}}>
            <span>{__('Loading code…')}</span><Spinner/></div>
    }

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
