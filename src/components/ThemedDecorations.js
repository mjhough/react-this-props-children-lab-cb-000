import React from 'react';

class ThemedDecorations extends React.Component {
  render() {
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });

    return (
      <div>{childrenWithExtraProp}</div>
    );
  }
}

export default ThemedDecorations;


// render() {
//     const currentPlayingTitle = 'Mad Max: Fury Road';
//     const childrenWithExtraProp = React.Children.map(this.props.children, child => {
//       return React.cloneElement(child, {
//         isPlaying: child.props.title === currentPlayingTitle
//       });
//     });
 
//     return (
//       <div className="movie-browser">
//         {childrenWithExtraProp}
//       </div>      
//     );
//   }
// }
