import React, { PropTypes } from 'react';
import { TextInput, TextArea } from '../common/Inputs.js';

class PostEdit extends React.Component {
	render() {
		return (
			<div>
				<form>

					<TextInput
						name="author"
						label="Author"
						value={this.props.post.author}
						onChange={this.props.onChange} />

					<TextInput
						name="heading"
						label="Heading"
						value={this.props.post.heading}
						onChange={this.props.onChange} />

					<TextArea
						name="content"
						label="Content"
						value={this.props.post.content}
						rows="10"
						onChange={this.props.onChange} />

					<div className="col-xs-12 col-sm-6 no-padding">
						<button
							type="button"
							disabled={this.props.saving}
							className="btn btn-danger"
							onClick={this.props.onCancel} >
							<i className="glyphicon glyphicon-remove"></i>
							Cancel
						</button>
					</div>

					<div className="col-xs-12 col-sm-6 no-padding">
						<button
							type="submit"
							disabled={this.props.saving}
							className="btn btn-success"
							onClick={this.props.onSave} >
							<i className="glyphicon glyphicon-floppy-disk"></i>
							Save
						</button>
					</div>
				</form>
			</div>
		)
	}
}

PostEdit.propTypes = {
	post: PropTypes.object.isRequired,
	onSave: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired
}

export default PostEdit;