import React from "react";
import LazyLoad from "react-lazyload";

import SearchResultItem from "../SearchResultItem";
import InfiniteScroll from "../ScrollList";
import { ShopTombstone } from "../Tombstone";
import "./style.scss";
import load from "../../static/image/loadding.gif";

class SearchResultList extends React.Component {
  render() {
    const spinLoader = (
      <div
        style={{
          textAlign: "center",
          fontSize: 12,
          lineHeight: 1.5,
          paddingTop: 15,
          paddingBottom: 5,
          clear: "both"
        }}
      >
        <img src={load} style={{ height: 10, width: 10 }} alt="" />正在加载...
      </div>
    );
    const { loadNext, data, hasMore, highlights } = this.props;
    return (
      <InfiniteScroll
        loadNext={loadNext}
        threshold={100}
        hasMore={hasMore}
        spinLoader={spinLoader}
      >
        {data &&
          data.map((val, index) => (
            <LazyLoad key={index} offset={10} placeholder={<ShopTombstone />}>
              <SearchResultItem data={val} highlights={highlights} />
            </LazyLoad>
          ))}
      </InfiniteScroll>
    );
  }
}

export default SearchResultList;