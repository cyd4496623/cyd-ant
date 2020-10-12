import React, { createContext, useState } from 'react';
import classNames from 'classnames';
export var MenuContext = createContext({ index: 0 });
var Menu = function (props) {
    var className = props.className, mode = props.mode, style = props.style, children = props.children, defaultIndex = props.defaultIndex, onSelect = props.onSelect;
    var _a = useState(defaultIndex), currentActive = _a[0], setCurrentActive = _a[1];
    var classes = classNames('viking-menu', className, {
        'menu-vertical': mode === 'vertical'
    });
    var handleClick = function (e) {
        setCurrentActive(e);
        onSelect && onSelect(e);
    };
    var passedContext = {
        index: currentActive || 0,
        onSelect: handleClick
    };
    var renderChilden = function () {
        return React.Children.map(children, function (child, index) {
            var childElemnet = child;
            var displayName = childElemnet.type.displayName;
            if (displayName === 'MenuItem') {
                return React.cloneElement(childElemnet, {
                    index: index
                });
            }
            console.log('Warning: Menu has a child which is not a MenuItem component');
            return null;
        });
    };
    return (React.createElement("ul", { className: classes, style: style },
        React.createElement(MenuContext.Provider, { value: passedContext }, renderChilden())));
};
Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal'
};
export default Menu;
