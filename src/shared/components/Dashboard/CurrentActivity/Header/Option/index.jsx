import PT from 'prop-types';
import React from 'react';

import './style.scss';

export default function Option({ select, selected, title }) {
  let containerStyle = 'container';
  if (selected) containerStyle += ' selected';

  return (
    <div styleName={containerStyle}>
      <div
        onClick={select}
        onKeyPress={select}
        role="button"
        // styleName={containerStyle}
        tabIndex={0}
      >{title}</div>
    </div>
  );
}

Option.propTypes = {
  select: PT.func.isRequired,
  selected: PT.bool.isRequired,
  title: PT.string.isRequired,
};
