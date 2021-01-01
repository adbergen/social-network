import React from "react";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      receiver_id: "",
      photoFile: null,
      photoUrl: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkSubmit = this.checkSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post[body]", this.state.body);
    formData.append("post[receiver_id]", this.state.receiver_id);
    if (this.state.photoFile) {
      formData.append("post[photo]", this.state.photoFile);
    }
    this.props.createPost(formData);
    this.setState({
      body: "",
      receiver_id: "",
      photoFile: null,
      photoUrl: null,
    });
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  update(value) {
    return (e) =>
      this.setState({
        [value]: e.target.value,
        receiver_id: this.props.user.id,
      });
  }

  checkSubmit(e) {
    if (e.keyCode == 13 && e.shiftKey == false) {
      this.handleSubmit(e);
    }
  }

  render() {
    return (
      <div
        className="post-form container"
        style={{
          backgroundColor: "#505050",
          marginTop: "20px",
          borderRadius: "10px",
          padding: "15px",
          paddingTop: "0px",
          width: "30%",
        }}
      >
        <div className="post-form-top">
          <div>
            <img className="pencil-post-image" src={window.pencilIcon} />
            <h6 className="post-form-header">Add your Car</h6>
          </div>
        </div>
        <div className="forced-background">
          <div id="post-image-form" className="post-image-container"></div>
        </div>
        <form className="form" onSubmit={this.handleSubmit}>
          <textarea
            placeHolder="Name"
            onKeyDown={this.checkSubmit}
            className="post-form-body"
            onChange={this.update("body")}
            value={this.state.body}
          ></textarea>
          <div className="preview-div">
          <div>
              <select style={{ width: "200px" }} className="browser-default custom-select">
                <option>Choose your year</option>
                <option value="1">2021</option>
                <option value="2">2020</option>
                <option value="3">2019</option>
              </select>
            </div>
            <div>
              <select style={{ width: "200px" }} className="browser-default custom-select">
                <option>Choose your make</option>
                <option value="1">Subaru</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
            <div>
              <select style={{ width: "200px" }} className="browser-default custom-select">
                <option>Choose your model</option>
                <option value="1">WRX</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
          </div>
          <div className="post-form-footer">
          <label htmlFor="photo-file">
                <img className="pencil-post-image" src={window.cameraIcon} />
                <h6 className="post-form-header" id="photo-header">
                  Add a Photo
                </h6>
              </label>
            <div className="photo-file-div">
                
              <input
                type="file"
                name="photo-file"
                id="photo-file"
                className="photo-file"
                onChange={this.handleFile}
              />
              
            </div>
            <input
              className="post-form-submit-button"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
