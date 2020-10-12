import React from 'react'
import { render,RenderResult, fireEvent } from '@testing-library/react'
import Menu, { IMenuProps } from './Menu'
import MenuItem from './MenuItem'

const testProps: IMenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'test'
}

const testVerProps: IMenuProps = {
  defaultIndex: 0,
  mode: 'vertical'
}

const generateMenu = (props: IMenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem index={1}>
      active
  </MenuItem>
      <MenuItem index={2} disabled>
      disabled
  </MenuItem>
      <MenuItem index={3}>
      xyz
  </MenuItem>
    </Menu>
  )
}

let wrapper:RenderResult,
menuElement: HTMLElement,
activeElement:HTMLElement,
disabledElement:HTMLElement

describe('test Menu and MenuItem component', () => {
  beforeEach(()=>{
    wrapper = render(generateMenu(testProps))
    menuElement= wrapper.getByTestId('test-menu')
    activeElement = wrapper.getByText('active')
    disabledElement = wrapper.getByText('disabled')
  })
  it('should render corrct Menu and MenuItem base on default props', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('viking-menu test')
    // expect(menuElement.querySelectorAll(':scope > li').length).toEqual(5)
    expect(activeElement).toHaveClass('menu-item is-active')
    expect(disabledElement).toHaveClass('menu-item is-disabled')
  })
  it('click items should change active and call the right callback', () => {
    const thirdItem = wrapper.getByText('xyz')
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith(2)
  })
  it('should render vertical mode when mode is set to vertical', () => {

  })
})