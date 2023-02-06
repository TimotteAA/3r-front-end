import { Form, Input, Button } from "@arco-design/web-react";
const FormItem = Form.Item;

const LoginUserName = () => {
  return (
    <Form
      style={{
        width: "100%",
      }}
      layout={"vertical"}
      size="large"
      validateTrigger={"onBlur"}
    >
      <FormItem label="用户名" field="username" rules={[{ required: true }]}>
        <Input style={{ width: "80%" }} placeholder="请输入您的用户名" />
      </FormItem>
      <FormItem label="密码" field="password" rules={[{ required: true }]}>
        <Input style={{ width: "80%" }} placeholder="请输入您的密码" />
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit" className={"w-4/5 m-2"}>
          注册
        </Button>
      </FormItem>
    </Form>
  );
};

export default LoginUserName;
