import {useEffect, useRef, useState} from "@wordpress/element";
import {createHighlighter} from "shiki/bundle/web";
import {
    transformerNotationDiff, transformerNotationFocus,
    transformerNotationHighlight, transformerNotationWordHighlight
} from "@shikijs/transformers";

const useHighlighter = ({attributes, setAttributes}) => {
    const [token, setToken] = useState(null)
    const highlighter = useRef(null)

    useEffect(() => {
        async function _createHighlighter() {
            const h = await createHighlighter({
                themes: [attributes.themeLight, attributes.themeDark],
                langs: [attributes.lang],
            })
            highlighter.current = h
        }

        _createHighlighter()
    }, []);

    useEffect(() => {
        async function loadTheme() {
            if (!highlighter.current) {
                return
            }
            await highlighter.current.loadTheme(attributes.themeLight)
            await highlighter.current.loadTheme(attributes.themeDark)
            await highlighter.current.loadLanguage(attributes.lang)

            setToken(`${attributes.themeLight}-${attributes.themeDark}-${attributes.lang}`)
        }

        loadTheme()
    }, [attributes.lang, attributes.themeLight, attributes.themeDark]);

    useEffect(() => {
        async function highlightCode(_content) {
            if (!highlighter.current) {
                return
            }
            // replace &lt; to <
            const _c = _content?.replace(/&lt;/g, '<');
            const code = highlighter.current.codeToHtml(_c, {
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
    }, [attributes.content, highlighter, token])

}

export default useHighlighter;
