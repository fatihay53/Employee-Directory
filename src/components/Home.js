import React from 'react';
import ApiService from "../service/ApiService";
import EmployeeTable from "./EmployeeTable";
import Header from "./Header"

export default class Home extends React.Component {

    constructor() {
        super();

        this.state = {
            data: [],
            initialData: [],
            name:"",
            // result: {}
        }
        // this.sortBy = this.sortBy.bind(this)

        this.apiService = new ApiService();

    }
    // sortBy(key){
    //     this.setState({
    //         result:result.sort((a,b)=>a<b)
    //     })
    // }

    render() {
        return (
            <>
            <Header></Header>
            <div className="container">
                <div style={{textAlign:'center',margin:'50px'}}>
                    <input type="text" onChange={(e)=>this.__onChange(e)}/>
                </div>

                <EmployeeTable data={this.state.data}
                // sortBy={this.sortBy()}
                clickLine={(name)=> this.setState({name:name})}
                />
                <h1>{this.state.name}</h1>
            </div>

</>
        );
    }

    componentDidMount() {
        this.apiService.getOnlinePeoples().then(res => {
            this.setState({data:res,initialData:res,result:res})
        })
    }

    __onChange = (e) =>{
        let value = e.target.value;
        let result= [];
        if (value !== ''){
            this.state.data.forEach(elem=>{
                if (elem.name.first.toLocaleLowerCase().includes(value.toLocaleLowerCase())){
                    result.push(elem);
                }
            })
        }
        result = result.length>0 ? result : this.state.initialData;
        this.setState({
            data:result
        });
    }
}

