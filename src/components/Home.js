// import React from "react";
// import { Button,Space} from "antd";
// import { Link } from "react-router-dom";

// function handleClick(){
//     return (
//         <Link to="table"/>
//     )
// }

// function Home(){
//     return(
//         <div>
//             <Space>
//                 <Link to="table"><Button>AntdTable</Button></Link>
//             </Space>
//         </div>
//     )
// }
// export default Home

import React, { Component } from "react";
import {
  Button,
  Modal,
  Table,
  Input,
  Col,
  Row,
  Form,
  Avatar,
  Space,
  Divider,
} from "antd";
import {
  UserOutlined,
  UpOutlined,
  DownOutlined,
  PlusOutlined,
} from "@ant-design/icons";
class ApprovalModel extends Component {
  state = {
    visible: false,
    is_expand1: false,
    is_expand2: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };
  onClose = () => {
    this.setState({ visible: false });
  };

  onExpand2 = () => {
    const value = this.state;
    const is_expand = value.is_expand2;
    this.setState({ is_expand2: is_expand ? false : true });
  };
  onExpand1 = () => {
    const value = this.state;
    const is_expand = value.is_expand1;
    this.setState({ is_expand1: is_expand ? false : true });
  };
  render() {
    let { visible, is_expand1, is_expand2 } = this.state;

    return (
      <React.Fragment>
        <Button onClick={this.showModal}>Approval Model</Button>
        <Modal
          width={window.innerWidth > 1000 ? 1000 : window.innerWidth - 10}
          visible={visible}
          onCancel={this.onClose}
          footer={null}
        >
          <div className="col">
            <div className="col-md-12">
              <div className="mb-4 kit__utils__table">
                <div className="card" style={{ backgroundColor: "#e8e8e6" }}>
                  <div className="card-body" style={{ padding: "0.7rem" }}>
                    <div className="row">
                      <div className="mx-4 ">
                        <Avatar size="large" icon={<UserOutlined />} />
                      </div>
                      <div>
                        <div>
                          <strong>UserName</strong>
                        </div>
                        <div>ERP</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="mb-4 kit__utils__table">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mb-3">
                    <strong>Reimbursement Type</strong>
                  </div>
                </div>
                <div
                  className="card mb-4"
                  style={{ backgroundColor: "#e8e8e6" }}
                >
                  <div className="row card-body">
                    <div className="col-md-6">Food</div>
                    <div className="col-md-6 text-right">
                      <Button type="text" onClick={this.onExpand1}>
                        {!is_expand1 ? <DownOutlined /> : <UpOutlined />}
                      </Button>
                    </div>
                  </div>
                  {is_expand1 ? (
                    <div className="card-body">
                      <div>Expanded</div>
                    </div>
                  ) : null}
                </div>

                <div
                  className="card mb-4"
                  style={{ backgroundColor: "#e8e8e6" }}
                >
                  <div className="row card-body">
                    <div className="col">
                      <div className="row">
                        <div className="col-md-6 text-center">Travel</div>
                        <div className="col-md-6 text-center">
                          Mode of transport
                        </div>
                      </div>
                    </div>
                    <div className="col text-right">
                      <Button type="text" onClick={this.onExpand2}>
                        {!is_expand2 ? <DownOutlined /> : <UpOutlined />}
                      </Button>
                    </div>
                  </div>
                  {is_expand2 ? (
                    <div>
                      <hr
                        className="hr mx-4 my-1"
                        style={{ backgroundColor: "#a6a6a9", height: "1px" }}
                      />
                      <div className="card-body">
                        <div>Doccument Attached</div>
                      </div>
                      <hr
                        className="hr mx-4 my-1"
                        style={{ backgroundColor: "#a6a6a9", height: "1px" }}
                      />
                      <div className="row card-body">
                        <div className="col-md-6">
                          <Button icon={<PlusOutlined />}>Add Remark</Button>
                        </div>
                        <div className="col-md-6 text-right">
                          <Space>
                            <Button
                              style={{
                                backgroundColor: "#a2a2a5",
                                color: "black",
                              }}
                            >
                              Discrepancy
                            </Button>
                            <Button
                              style={{
                                backgroundColor: "#a2a2a5",
                                color: "black",
                              }}
                            >
                              Reject
                            </Button>
                            <Button
                              style={{
                                backgroundColor: "#3a3a3c",
                                color: "white",
                              }}
                            >
                              {" "}
                              Accept
                            </Button>
                          </Space>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="col text-right">
              <div className="pt-4">
                <Space>
                  <Button
                    style={{ backgroundColor: "#a2a2a5", color: "black" }}
                  >
                    Reject All
                  </Button>
                  <Button
                    style={{ backgroundColor: "#3a3a3c", color: "white" }}
                  >
                    Accept All
                  </Button>
                </Space>
              </div>
            </div>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ApprovalModel;
