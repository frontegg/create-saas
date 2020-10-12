import React from 'react';
import Widget from '../../../Widget';
import { VerticalTabs, HorizontalTabs, IconTabs, UnderlinedTabs } from '../../../../../Components/Tab';
import { Dehaze, FavoriteBorderOutlined, SettingsOutlined } from '@material-ui/icons';

const tabs = [
  {
    tabId: 'tab-favorites',
    label: (
      <>
        <FavoriteBorderOutlined className='mb-2 mx-2' />
        <div className='mb-2 mx-2'>Favourites</div>
      </>
    ),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Condimentum vitae sapien pellentesque habitant morbi. Nec ullamcorper sit amet risus nullam eget felis. Dignissim sodales ut eu sem integer vitae justo eget. In pellentesque massa placerat duis ultricies.',
  },
  {
    tabId: 'tab-options',
    label: (
      <>
        <Dehaze className='mb-2 mx-2' />
        <div className='mb-2 mx-2'>Options</div>
      </>
    ),
    content:
      'Id cursus metus aliquam eleifend mi in. Etiam sit amet nisl purus in. At quis risus sed vulputate odio ut enim blandit. Aliquet enim tortor at auctor urna nunc id cursus metus. Massa enim nec dui nunc. Penatibus et magnis dis parturient montes. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Enim ut tellus elementum sagittis vitae. Quisque sagittis purus sit amet. Augue lacus viverra vitae congue eu.',
  },
  {
    tabId: 'tab-settings',
    label: (
      <>
        <SettingsOutlined className='mb-2 mx-2' />
        <div className='mb-2 mx-2'>Settings</div>
      </>
    ),
    content:
      'Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Sed nisi lacus sed viverra. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Adipiscing elit pellentesque habitant morbi tristique senectus. Laoreet suspendisse interdum consectetur libero id. Tincidunt nunc pulvinar sapien et ligula.',
  },
];

const tabs2 = [
  {
    tabId: 'tab-favorites',
    label: 'Favourites',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Condimentum vitae sapien pellentesque habitant morbi. Nec ullamcorper sit amet risus nullam eget felis. Dignissim sodales ut eu sem integer vitae justo eget. In pellentesque massa placerat duis ultricies.',
  },
  {
    tabId: 'tab-options',
    label: 'Options',
    content:
      'Id cursus metus aliquam eleifend mi in. Etiam sit amet nisl purus in. At quis risus sed vulputate odio ut enim blandit. Aliquet enim tortor at auctor urna nunc id cursus metus. Massa enim nec dui nunc. Penatibus et magnis dis parturient montes. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Enim ut tellus elementum sagittis vitae. Quisque sagittis purus sit amet. Augue lacus viverra vitae congue eu.',
  },
  {
    tabId: 'tab-settings',
    label: 'Settings',
    content:
      'Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Sed nisi lacus sed viverra. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Adipiscing elit pellentesque habitant morbi tristique senectus. Laoreet suspendisse interdum consectetur libero id. Tincidunt nunc pulvinar sapien et ligula.',
  },
];

const Tabs: React.FC = () => {
  return (
    <div className='relative'>
      <div className='text-xl font-bold mb-3'>Tabs</div>
      <Widget col>
        <div className='mb-3'>
          <div className='text-sm font-light text-grey-500'>Default tabs</div>
          <div className='text-sm font-bold'>
            <span>
              Use the <code>&lt;HorizontalTabs /&gt;</code> component for tabs with <code>pills</code> prop
            </span>
          </div>
        </div>
        <HorizontalTabs navClass='mx-3' activeTabId='tab-favorites' tabs={tabs} pills />
      </Widget>
      <Widget col>
        <div className='mb-3'>
          <div className='text-sm font-light text-grey-500'>Vertical tabs</div>
          <div className='text-sm font-bold'>
            <span>
              Use the <code>&lt;VerticalTabs /&gt;</code> component for vertical tabs
            </span>
          </div>
        </div>
        <VerticalTabs activeTabId='tab-favorites' tabs={tabs} pills />
      </Widget>
      <Widget col>
        <div className='mb-3'>
          <div className='text-sm font-light text-grey-500'>Underlined tabs</div>
          <div className='text-sm font-bold'>
            <span>
              Use the <code>&lt;UnderlinedTabs /&gt;</code> component for underlined tabs
            </span>
          </div>
        </div>
        <UnderlinedTabs activeTabId='tab-favorites' tabs={tabs2} activeClass='border-primary' />
      </Widget>
      <Widget col>
        <div className='mb-3'>
          <div className='text-sm font-light text-grey-500'>Tabs with icons</div>
          <div className='text-sm font-bold'>
            <span>
              Use the <code>&lt;IconTabs /&gt;</code> component for tabs with icons
            </span>
          </div>
        </div>
        <IconTabs activeTabId='tab-favorites' tabs={tabs} />
      </Widget>
      <Widget col>
        <div className='mb-3'>
          <div className='text-sm font-light text-grey-500'>Default tabs</div>
          <div className='text-sm font-bold'>
            <span>
              Use the <code>&lt;HorizontalTabs /&gt;</code> component for tabs with <code>pills</code> prop
            </span>
          </div>
        </div>
        <HorizontalTabs activeTabId='tab-favorites' tabs={tabs2} pills />
      </Widget>
    </div>
  );
};

export default Tabs;
