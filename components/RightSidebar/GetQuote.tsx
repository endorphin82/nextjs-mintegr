import {Button, Card, Form, Input} from "antd";
import {UserOutlined, MailOutlined, FileTextOutlined} from '@ant-design/icons';

const {TextArea} = Input;
export const GetQuote = () => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Finish:', values);
  };

  return (
    <div className="right-sidebar__get-quote get-quote">
      <Card bordered={false} hoverable title="get a quote" style={{width: 300, cursor: "default", margin: 0}}>
        <Form
          form={form}
          name="advanced_search"
          className="ant-advanced-search-form"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{required: true, message: 'Please input your username!'}]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Name"/>
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{required: true, message: 'Please input your email!'}]}
          >
            <Input prefix={<MailOutlined className="site-form-item-icon"/>} placeholder="Email"/>
          </Form.Item>
          <Form.Item
            name="text"
            rules={[{required: true, message: 'Please input your text!'}]}
          >
            <TextArea
              autoSize={{minRows: 6, maxRows: 6}}
              placeholder="Tell us about your project"/>
          </Form.Item>
          <div className="get-quote__button-wrapper">
            <Button type="primary" htmlType="submit">
              Send
            </Button>
          </div>

        </Form>
   
      </Card>
    </div>
  )
}