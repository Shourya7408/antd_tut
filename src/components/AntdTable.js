import React from "react";
import { useState, useRef } from "react";
import {
  Space,
  Table,
  Button,
  Popover,
  Drawer,
  Form,
  Input,
  InputNumber,
} from "antd";


function Antdtable() {
    const handleChanges = (record) => {
        // console.log("Edit",e);
        const vals = formRef.current.getFieldsValue()
        console.log("value changes",vals);
        const updatedItems=data.map((item)=>{
            if(item.key===record.key){
                return {...item, name: vals.name, age: vals.age, dob: vals.dob};
            }
            return item;
        });
        setData(updatedItems);
        console.log("updated items", updatedItems);

        console.log("change data", data);
      };
      
    const formRef = useRef();
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const handleDelete = (e, record) => {
    console.log("record", record);
    const updatedItems = data.filter((item) => item.key !== record.key);
    setData(updatedItems);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "DOB",
      dataIndex: "dob",
      key: "dob",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => showDrawer(record)}>Edit</Button>

          <Popover
            placement="bottom"
            title="Alert"
            content={
              <Space>
                <span>Data will be deleted permanently!</span>
                <Button
                  size="small"
                  style={{ backgroundColor: "red" }}
                  onClick={(e) => handleDelete(e, record)}
                >
                  Delete
                </Button>
              </Space>
            }
            trigger="click"
          >
            <Button danger>Delete</Button>
          </Popover>
          <Drawer
            title="Edit Details"
            placement="right"
            width={500}
            onClose={onClose}
            open={open}
          >
            <Form
              ref={formRef}
              layout="vertical"
              id="myForm"
            //   onFinish={()=>handleChanges()}
            >
              <Form.Item label="Name" name='name' rules={[{ required: true }]}>
                <Input  />
              </Form.Item>
              <Form.Item label="Age" name='age'   rules={[{ required: true }]}>
                <InputNumber min={0}/>
              </Form.Item>
              <Form.Item name='dob' label="Date of Birth">
                <Input  />
              </Form.Item>
              <Space>
                {/* <Button type="primary" onClick={(e)=>handleChanges(e)}>Save Changes</Button> */}
                <Button type="primary" onClick={()=>handleChanges(record)} form="myForm" htmlType="submit">
                  Save Changes
                </Button>
                <Button type="primary" onClick={onClose}>
                  Cancel
                </Button>
              </Space>
            </Form>
          </Drawer>
        </Space>
      ),
    },
  ];

  const [data, setData] = useState([
    {
      key: "1",
      name: "John Brown",
      age: 32,
      dob: "28/02/1991",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      dob: "27/04/1981",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 30,
      dob: "12/05/1993",
    },
  ]);

  return (
    <div>
      <h1>Antdtable</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
export default Antdtable;
