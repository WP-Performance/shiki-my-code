import {__} from '@wordpress/i18n';
import {
  BlockControls,
} from '@wordpress/block-editor';
import {
  ToolbarGroup,
  ToolbarButton,
} from '@wordpress/components';


const Control = ({mode, setMode}) => <BlockControls>
  <ToolbarGroup>
    <ToolbarButton
      icon="edit"
      label={__('Edit', 'shiki-my-code')}
      isActive={mode === 'edit'}
      onClick={() =>
        setMode('edit')
      }
    />
    <ToolbarButton
      icon="visibility"
      label={__('View', 'shiki-my-code')}
      isActive={mode === 'view'}
      onClick={() =>
        setMode('view')
      }
    />
  </ToolbarGroup>
</BlockControls>

export default Control
