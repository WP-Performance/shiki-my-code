import {useEffect, useRef, useState} from "@wordpress/element";
import {createHighlighter} from "shiki/bundle/web";
import {
    transformerNotationDiff, transformerNotationFocus,
    transformerNotationHighlight, transformerNotationWordHighlight
} from "@shikijs/transformers";

const useHighlighter = ({attributes, setAttributes}) => {
    // token for re-render when attributes lang or theme change
    const [token, setToken] = useState(null)
    // highlighter instance is ready
    const [isReady, setIsReady] = useState(false)
    // highlighter instance
    const highlighter = useRef(null)

    useEffect(() => {
        // create highlighter instance
        const _createHighlighter = async () => {
            const h = await createHighlighter({
                themes: [attributes.themeLight, attributes.themeDark],
                langs: [attributes.lang],
            })
            highlighter.current = h
            setIsReady(true)
        }

        _createHighlighter().catch(console.error)
    }, []);

    useEffect(() => {
        // load theme and language when attributes change
        const loadTheme = async () => {
            if (!highlighter.current) {
                return
            }
            await highlighter.current.loadTheme(attributes.themeLight)
            await highlighter.current.loadTheme(attributes.themeDark)
            await highlighter.current.loadLanguage(attributes.lang)

            setToken(`${attributes.themeLight}-${attributes.themeDark}-${attributes.lang}`)
        }

        loadTheme().catch(console.error)

    }, [attributes.lang, attributes.themeLight, isReady, attributes.themeDark]);

    useEffect(() => {
        const highlightCode = (_content) => {
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

    }, [attributes.content, highlighter, token, isReady])

    return {isReady}

}

export default useHighlighter;
