import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { FcNext, FcPrevious } from 'react-icons/fc';

function Home(props) {
    const [data, setData] = useState()
    const [skip, setSkip] = useState(0)

    useEffect(() => {
        getDataFromApi()
    }, [skip])

    function getDataFromApi() {
        fetch(`https://dummyjson.com/posts?skip=${skip}&limit=20`)
            .then(response => response.json())
            .then(data => setData(data));
    }


    const [columnDefs] = useState([
        { field: 'id' },
        { field: 'title' },
        { field: 'body' },
        { field: 'userId' },

    ])
    function previousSkip(){
        if(skip==0){
            return 0;
        }else{
            setSkip(skip-20)
        }
    }
    function nextSkip(){
        if(skip>130){
            return 0;
        }else{
            setSkip(skip+20)
        }
    }
    console.log(data)
    return (
        <div 
        style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            // border:'2px solid black'
        }}
        >
            {data ?

                <div className="ag-theme-alpine" style={{ height: 700, width: '54%', marginTop:'10px' }}>
                    <AgGridReact
                        rowData={data.posts}
                        columnDefs={columnDefs}>
                    </AgGridReact>
                    <div className="pagination"
                        style={{
                            display: 'flex',
                            flexDirection:'row',
                            width: '100%',
                            border: '2px solid black',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                           

                        }}>
                        <div className="totalItems" style={{
                           paddingRight:'20px'

                        }}>
                            <h3>Total  {data.total} </h3>

                        </div>
                        <div className="totalItems" style={{
                            display: 'flex',
                            flexDirection:'row',
                            paddingRight:'20px',
                            alignItems: 'center',
                            justifyContent: 'flex-end'

                        }}>
                            <h3>  {data.skip}  </h3>
                            <h3>  - {data.skip + 20}</h3>

                        </div>
                        <div className="icons">
                            <FcPrevious style={{ fontSize: '30px',cursor:'pointer' }} onClick={()=>{previousSkip()}} />
                            <FcNext style={{ fontSize: '30px',cursor:'pointer' }} onClick={()=>{nextSkip()}} />
                        </div>

                    </div>
                </div>


                : ''}

        </div>
    );
}

export default Home;