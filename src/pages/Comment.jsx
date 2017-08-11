
import React from 'react'
import { Link } from 'react-router'
import ajax from 'component-ajax'
import 'src/static/css/comment.css'

class Comment extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			comments: [],
			author: '',
			text: ''
		}
	}
	// 使用fetch获取数据
	// https://github.github.io/fetch/
	fetchData(event) {
		event.preventDefault && event.preventDefault()
		const author = this.state.author.trim()
		const text = this.state.text.trim()
		if(!author || !text) {
			return;
		}
		let data = {author: author, text: text}
		ajax({
			url: 'http://192.168.204.49:3001/api/comments',
			type: 'POST',
			data: data,
			dataType: 'json',
			success: (respose) => {
				this.setState({comments: respose.comments})
			},
			error: (response) => {
				console.log('error')
				console.log(response.responseText)
			}
		})
	}
	handleAuthorChange(e) {
		this.setState({author: e.target.value})
	}
	handleTextChange(e) {
		this.setState({text: e.target.value})
	}
    render() {
    	const commentList = this.state.comments.map((comment) => (
    		<li key={comment.id}>author: {comment.author}&nbsp;comment: {comment.text}</li>
        ))
        return (
            <div>
            	<div className="div-img"></div>
            	<form className="mt20" onSubmit={this.fetchData.bind(this)}>
	            	{'name: '}<input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange.bind(this)} />
	            	<br/>
					{'comment: '}<input type="text" placeholder="Say something..." value={this.state.text} onChange={this.handleTextChange.bind(this)} />
					<br/>
					<input type="submit" value="post comment" />
				</form>
                <h3 className="mt20 red">Comment list:</h3>
                <ul>{commentList}</ul>
            </div>
        )
    }
}

export default Comment
