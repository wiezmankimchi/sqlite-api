import React from "react";
// import ReactDOM from "react-dom";

import ReactList from "react-list";
import { ListGroup, ListGroupItem } from "reactstrap";

class TagList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: []
    };

    this.renderItem = this.renderItem.bind(this);
  }

  //fetch results after first mount
  componentDidMount() {
    fetch("/tags/all")
      .then(results => results.json())
      .then(list => {
        this.setState({ list });
      });
  }

  renderItem(index, key) {
    return (
      <ListGroupItem className="justify-content-between" key={key}>
        {this.state.list[index].name}
      </ListGroupItem>

      // <div key={key}>{this.state.list[index].name}</div>;
    );
  }

  render() {
    return (
      <div>
        <h1>Tags</h1>

        <div style={{ overflow: "auto", maxHeight: 400 }}>
          <ListGroup />
          <ReactList
            itemRenderer={this.renderItem}
            length={this.state.list.length}
            type="variable"
          />
        </div>
      </div>
    );
  }
}

export default TagList;
