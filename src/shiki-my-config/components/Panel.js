import {
    Panel,
    PanelBody,
    PanelRow,
    SelectControl,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
    Button,
} from '@wordpress/components'
import {__} from '@wordpress/i18n'
import {useDispatch} from '@wordpress/data'
import {store as noticesStore} from '@wordpress/notices';
import apiFetch from '@wordpress/api-fetch';
import {useEffect, useState} from '@wordpress/element';
import Notices from './notices';
// options for select
import {themes} from '../../shiki-my-block/options'

const PanelSettings = () => {
    const {createSuccessNotice} = useDispatch(noticesStore);

    const [themeLight, setThemeLight] = useState()
    const [themeDark, setThemeDark] = useState()
    const [mode, setMode] = useState('edit');

    useEffect(() => {
        apiFetch({path: '/wp/v2/settings'}).then((settings) => {
            setThemeLight(settings.wpperformance_shiki_my_code.theme_light ?? 'github-light-default');
            setThemeDark(settings.wpperformance_shiki_my_code.theme_dark ?? 'github-dark-default');
            setMode(settings.wpperformance_shiki_my_code.mode ?? 'edit');
        });
    }, []);

    const handlerSave = () => {
        apiFetch({
            path: '/wp/v2/settings',
            method: 'POST',
            data: {
                wpperformance_shiki_my_code: {
                    theme_light: themeLight,
                    theme_dark: themeDark,
                    mode: mode,
                },
            },
        }).then(() => {
            createSuccessNotice(
                __('Settings saved.', 'shiki-my-code')
            );
        });
    };


    return (
        <>
            <Notices/>
            <Panel>
                <PanelBody>
                    <PanelRow>
                        <h2>{__('Default themes for Shiki block', 'shiki-my-code')}</h2>
                    </PanelRow>
                    <PanelRow>
                        <p>{__('This settings don\'t change the default' +
                            ' theme for blocks already in content. It\'s' +
                            ' just for the themes selected by default when you add a block in content', 'shiki-my-code')}</p>
                    </PanelRow>
                    <PanelRow>
                        <SelectControl
                            label={__('Theme Light', 'shiki-my-code')}
                            value={themeLight}
                            options={themes['light']}
                            onChange={(themeLight) => setThemeLight(themeLight)}
                        />
                    </PanelRow>
                    <PanelRow>
                        <SelectControl
                            label={__('Theme Dark', 'shiki-my-code')}
                            value={themeDark}
                            options={themes['dark']}
                            onChange={(themeDark) => setThemeDark(themeDark)}
                        />
                    </PanelRow>
                    <PanelRow>
                        <ToggleGroupControl
                            value={mode}
                            onChange={setMode}
                            __nextHasNoMarginBottom
                            isBlock
                            label={__('Default mode for Shiki block', 'shiki-my-code')}
                        >
                            <ToggleGroupControlOption
                                label="Edit"
                                value="edit"
                            />
                            <ToggleGroupControlOption
                                label="View"
                                value="view"
                            />
                        </ToggleGroupControl>
                    </PanelRow>
                </PanelBody>
                <Button variant="primary" onClick={handlerSave}
                        __next40pxDefaultSize>
                    {__('Save', 'shiki-my-code')}
                </Button>
            </Panel>
        </>
    );
};

export default PanelSettings;
