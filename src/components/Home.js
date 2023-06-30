import React from "react";
import { Button,Space} from "antd";
import { Link } from "react-router-dom";

function handleClick(){
    return (
        <Link to="table"/>
    )
}
    
function Home(){
    return(
        <div>
            {/* <Button onClick={()=>handleClick}>AntdTable</Button> */}
            <Space>
                <Link to="table"><Button>AntdTable</Button></Link>
            </Space>
        </div>
    )
}
export default Home