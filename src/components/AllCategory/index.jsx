import React, { Component } from "react";

import  "./style.scss";
import Loadding from "../Loadding";
import getImgSrc from "../../util/getImgSrc";

class AllCategory extends Component {
  componentDidMount() {
    document.body.style.overflow = "hidden";
    document.body.style.position = "relative";
    document.getElementsByTagName("body")[0].style.height =
      window.screen.height + "px";
  }
  componentWillUnmount() {
    document.body.style.overflow = "visible";
    document.body.style.position = "";
    document.getElementsByTagName("body")[0].style.height = "auto";
  }
  render() {
    const {
      category,
      mainMenuId,
      subMenuId,
      top,
      setMainMenuId,
      setSubMenuId
    } = this.props;
    const submenu =
      category &&
      category.filter(element => element.id === mainMenuId)[0].sub_categories;
    return (
      <div className="filter-category">
        {top && (
          <div className="top">
            <span>请选择分类</span>
            <i
              onClick={() => {
                this.props.closeCategory();
              }}
              className="iconfont icon-close"
            />
          </div>
        )}
        <div className="scroller-wrap">
          {category ? (
            <div className="filter-scroller">
              <ul className="main-menu">
                {category &&
                  category.map((val, index) => (
                    <li
                      key={index}
                      className={`main-menu-item ${val.id === mainMenuId ?
                        "main-menu-activity":""}`}
                      onClick={() => {
                        setMainMenuId && setMainMenuId(val.id);
                      }}
                    >
                      <span className="menu-name">{val.name}</span>
                      <span className="count">{val.count}</span>
                    </li>
                  ))}
              </ul>
              <ul className="sub-menu">
                {submenu &&
                  submenu.map((val, index) => (
                    <li
                      key={index}
                      className={`sub-menu-item ${val.id === subMenuId ?
                        "sub-menu-activity":""}`}
                      onClick={() => {
                        setSubMenuId && setSubMenuId(val.id, submenu);
                      }}
                    >
                      <img
                        className="menu-img"
                        src={getImgSrc(val.image_url)}
                        alt="category"
                      />
                      <span className="menu-name">{val.name}</span>
                      <span className="count">{val.count}</span>
                    </li>
                  ))}
              </ul>
            </div>
          ) : (
            <Loadding />
          )}
        </div>
        <div
          className="shade"
          onClick={() => {
            this.props.closeCategory();
          }}
        />
      </div>
    );
  }
}
export default AllCategory;
