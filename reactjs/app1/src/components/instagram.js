import React from "react";
// task 1 - Toggle heart/favourite
// task 2 - Toggle Bookmark
// task 3 - accept & display comment
export default class Instagram extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            isLike : false,
            isBookmarked : false,
            comment:'',
            messages: [] // list
        }
    }


    updateComment = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    addMessage = (event) => {
        this.setState({
            messages: [...this.state.messages,this.state.comment]
        },()=> {
            this.setState({
                comment:''
            })
        })
    }
    
    toggleBookMark = () => {
        this.setState({
            isBookmarked: ! this.state.isBookmarked
        });
    }

    toogleLike = () => {
        this.setState({
            isLike: ! this.state.isLike
        });
    }
    render() {
        return (<div className="container mt-3">
            <div className="row">
                <div className="col-lg-6 offset-3">
                    <div className="card">
                        <div className="card-header">
                            <h6>the easylearn academy</h6>
                        </div>
                        <div className="card-body">
                            <img src="https://picsum.photos/400?random=1" className="img-fluid text-center" />
                            <div className="d-flex justify-content-between mt-2">
                                <span>
                                    <span className={(this.state.isLike == true) ? "text-danger":"text-dark"}>
                                        <i onClick={this.toogleLike} className="fa-solid fa-heart fa-2x" />&nbsp;
                                    </span>
                                    <i className="fa-solid fa-comment fa-2x" />&nbsp;
                                    <i className="fa-solid fa-share fa-2x" />&nbsp;
                                </span>
                                <span>
                                    <span className={(this.state.isBookmarked == true)?'text-danger':'text-dark'}><i onClick={this.toggleBookMark} className="fa-solid fa-bookmark fa-2x" /></span>
                                </span>
                            </div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, provident sint esse</p>
                            <ul className="list-unstyled">
                            {
                                this.state.messages.map((item)=>{
                                    return <li>{item}</li>;
                                })
                            }
                                
                            </ul>
                            <table className="table">
                                <tbody><tr>
                                    <td width="80%">
                                        <textarea name="comment" id="comments" className="form-control" placeholder="comments" value={this.state.comment} onChange={this.updateComment} />
                                    </td>
                                    <td width="20%">
                                        <button onClick={this.addMessage} type="button" className="btn btn-primary btn-sm w-100">Send</button>
                                    </td>
                                </tr>
                                </tbody></table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}