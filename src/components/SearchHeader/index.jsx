import React,{Component} from 'react'
import SearchComponent from '../SearchComponent'
import './style.scss'

export default class SearchHeader extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="search-header">
                <div className="search-back" onClick={() => {window.history.go(-1)}}>
                    <i className="iconfont icon-fanhuijiantou back"></i>
                </div>
                <div className="search-comp-box">
                    <SearchComponent height={5} placeholder={"输入商家、商品名称"}/>
                </div>
                <div className="search-btn">搜索</div>
            </div>
        )
    }
}