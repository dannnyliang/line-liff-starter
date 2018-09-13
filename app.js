const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return (
      <button onClick={() => this.setState({ liked: !this.state.liked })}>
        {this.state.liked ? 'like' : 'dislike'}
      </button>
    );
  }
}

ReactDOM.render(
  e(LikeButton),
  document.querySelector('#react-root')
)