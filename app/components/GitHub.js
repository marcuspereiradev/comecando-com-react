const React = require('react');

const GitHub = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    console.log(this.refs.username.value);
  },
  render: function () {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>GitHub Info</h1>
          <div className="row">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input
                  ref="username"
                  type="text"
                  className="form-control"
                  placeholder="Ex: Marcus"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary">Buscar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = GitHub;