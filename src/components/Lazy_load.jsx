import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
function Lazy_load(props) {
    const [items, setItems] = useState(Array.from({ length: 20 }));

    const fetchMoreData = () => {
       
        setTimeout(() => {
            setItems(items.concat(Array.from({ length: 10 })));

        }, 1000)
    };
    const style = {
        height: 18,
        border: "1px solid green",
        margin: 6,
        padding: 8
    };
    // console.log(Array.from({ length: 20 }))
    return (
        <div id="scrollableDiv" style={{ height: "100%", overflowY: "scroll" }}>
            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={items.length < 200}
                loader={<h4>Loading...</h4>}
                scrollableDiv="scrollableDiv"
            >
                {items.map((i, index) => (
                    <div style={style} key={index}>
                        div - #{index}
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    );
};

export default Lazy_load;