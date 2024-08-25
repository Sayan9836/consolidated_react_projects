import React, { Component } from "react";

// export default class Children extends Component {
//     render() {
//         const { children, name } = this.props;
//         return (
//             <div>
//                 <h1>{children}</h1>
//                 <h1>{name}</h1>
//             </div>
//         )
//     }
// }

import React from "react";

const Children = ({ Children, name }) => {
  return (
    <div>
      <h1>{Children}</h1>
      <h1>{name}</h1>
    </div>
  );
};

export default Children;
