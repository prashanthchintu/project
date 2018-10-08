var React= require('react');

var TodoSearch = React.createClass({
    handleSearch:function(){
        

        var showComplted=this.refs.showComplted.checked;
        var searchText=this.refs.searchText.value;

        this.props.onSearch(showComplted,searchText)
    },
    render:function(){
        return(
            <div className="container__header">
                <div>
                    <input type="search" ref="searchText" placeholder="searchtodos" onChange={this.handleSearch} />
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
                        show completed todos
                    </label>
                </div>
            </div>

        )
    }
});

module.exports=TodoSearch;