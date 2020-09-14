import React from 'react';

export default ({ items }) => {
  const renderedItems = items.map(item => {
      return <React.Fragment id={item.title}>
        <div className="title active">
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>;
  });

  return <div className="ui styled accordion">
    {renderedItems}
  </div>;
}
