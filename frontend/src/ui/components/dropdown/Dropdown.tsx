import { Menu } from '@headlessui/react';
import React, { Fragment } from 'react';
import FlatButton from '../button/FlatButton';

function Dropdown(props: any) {

  const renderDropdown = (open: boolean) => {
    return props.children.map((child: (open: boolean, active: boolean) => JSX.Element) => {
      return (
        <Menu.Item>
          {({ active }) => (
            <Fragment>
              {child(open, active)}
            </Fragment>
          )}
        </Menu.Item>
      )
    });
  }

  return (
    <>
      <Menu>
        {({ open }) => (
          <Fragment>
            <Menu.Button as={Fragment}>
              <FlatButton icon={props.icon} />
            </Menu.Button>
            <div className={"absolute w-full bg-white shadow-2xl top-14"}>
              <Menu.Items>
                {renderDropdown(open)}
              </Menu.Items>
            </div>
          </Fragment>
        )}
      </Menu>
    </>
  )
}

export default Dropdown
function children(open: boolean, active: boolean): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)> {
  throw new Error('Function not implemented.');
}

