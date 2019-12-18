import React from 'react';

class UploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoFile: null,
            photoUrl: null,
            title: '',
            description: '',
            privacy: '',
            location: '',
            category: '',
            authorId: this.props.currentUserId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo[title]', this.state.title);
        formData.append('photo[photo_file]', this.state.photoFile);
        formData.append('photo[description]', this.state.description);
        formData.append('photo[privacy]', this.state.privacy);
        formData.append('photo[location]', this.state.location);
        formData.append('photo[category]', this.state.category);
        formData.append('photo[author_id]', this.state.authorId);
        formData.append('photo[width]', this.state.width);
        formData.append('photo[height]', this.state.height);
        this.props.createPhoto(formData).then(()=> {
            this.setState({
                photoFile: null,
                photoUrl: null,
                title: '',
                description: '',
                privacy: '',
                location: '',
                category: '',
                authorId: this.props.currentUserId
            })
            this.props.closeModal()});
    }

    updateState(type) {
        return (e) => {
            this.setState({
                [type]: e.currentTarget.value
            });
        };
    }

    clearModal(e) {
        if (this.state.photoUrl) {
            if (confirm('This photo will not be loaded. Are you Sure you want to continue?')) {
                this.setState({photoFile:null, photoUrl: null})
                this.props.closeModal();
            }
        } else {
            this.props.closeModal();
        }
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            const img = new Image();
            img.src = fileReader.result;
            img.onload = () => {
                this.setState({photoFile: file, 
                    photoUrl: fileReader.result,
                    authorId: this.props.currentUserId,
                    width: img.width,
                    height: img.height
                });
            }
        }
        if (file){
            fileReader.readAsDataURL(file);
        }
    }

    render() {
        const {modal} = this.props;
        const {photoUrl} = this.state;
        const edit = (<div className="upload-edit">
            <div className="upload-edit-preview">
                <div>
                	<img src={photoUrl} />
                </div>
            </div>
            <div className="upload-edit-form-container">
                <form onSubmit={this.handleSubmit}>
                    <button onClick={this.handleSubmit}>Submit</button>
                    <div><label>Photo privacy</label>
                    <select value={this.state.privacy}
                        onChange={this.updateState("privacy")}>
                        <option value="1">Public</option>
                        <option value="2">Unlisted</option>
                        <option value="3">Limited access</option>
                    </select></div>
                    
                    <div><label>Location</label>
                    <input type="text" value={this.state.location}
                    onChange={this.updateState("location")} /></div>
                    
                    <div><label>Category</label>
                    <select value={this.state.category} onChange={this.updateState("category")}>
                    <option value="1">Uncategorized</option>
                    <option value="2">Abstract</option>
                    <option value="3">Aerial</option>
                    <option value="4">Animals</option>
                    <option value="5">Black and White</option>
                    <option value="6">Boudoir</option>
                    <option value="7">Celebrities</option>
                    <option value="8">City &amp; Architecture</option>
                    <option value="9">Commercial</option>
                    <option value="10">Concert</option>
                    <option value="11">Concert</option>
                    <option value="12">Family</option>
                    <option value="13">Fashion</option>
                    <option value="14">Film</option>
                    <option value="15">Fine Art</option>
                    <option value="16">Food</option>
                    <option value="17">Journalism</option>
                    <option value="18">Landscape</option>
                    <option value="19">Macro</option>
                    <option value="20">Nature</option>
                    <option value="21">Night</option>
                    <option value="22">Nude</option>
                    <option value="23">People</option>
                    <option value="24">Performing Arts</option>
                    <option value="25">Sports</option>
                    <option value="26">Still Life</option>
                    <option value="27">Street</option>
                    <option value="28">Transportation</option>
                    <option value="29">Travel</option>
                    <option value="30">Underwater</option>
                    <option value="31">Urban Exploration</option>
                    <option value="32">Wedding</option>
                    </select></div>
                    <div><label>Title</label>
                        <input type="text" value={this.state.title}
                            onChange={this.updateState("title")} /></div>
                    <div><label>Description</label>
                    <textarea value={this.state.description}
                        onChange={this.updateState("description")} 
                        placeholder="Tell us about your beautiful photo"/></div>
                </form>
            </div></div>)
        const upload = (<div>
                <input type="file" name="photo-upload" id="photo-upload"
                    className="file-input"
                    onChange={this.handleFile.bind(this)} />
                <label htmlFor="photo-upload" className="photo-upload-button">
                    <span>Select a Photo</span>
            </label>
            </div>)
        if (!modal) {
            return null;
        }
        return (
            <div className="modal-background" onClick={this.clearModal.bind(this)}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    {photoUrl ? edit : upload}
                </div>
            </div>
        )
    }
}

export default UploadForm;