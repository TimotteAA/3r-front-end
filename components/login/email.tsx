import { Form, Input, Button } from "@arco-design/web-react";
import Captcha from "./captcha";

const FormItem = Form.Item;

const LoginEmail = () => {
  return (
    <>
      <Form
        style={{
          width: "100%",
        }}
        layout={"vertical"}
        size="large"
        validateTrigger={"onBlur"}
      >
        <FormItem
          label="邮箱"
          field="email"
          rules={[
            { required: true },
            {
              validator(value, callback) {
                return callback();
              },
            },
          ]}
        >
          <Input style={{ width: "80%" }} placeholder="请输入您的邮箱" />
        </FormItem>
        <FormItem
          label="验证码"
          field="captcha"
          rules={[
            { required: true },
            {
              validator(value, cb) {
                if (value.length > 6) {
                  return cb("验证码为6位数字组成");
                } else if (value.length === 6) {
                  const reg = /^\d{6}$/;
                  if (!reg.test(value)) return cb("验证码只能由数字组成");

                  return cb();
                }

                return cb();
              },
            },
          ]}
        >
          <Input style={{ width: "60%" }} placeholder="请输入您的验证码" />
          <Captcha />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className={"w-4/5 m-2"}>
            注册
          </Button>
        </FormItem>
      </Form>
    </>
  );
};

export default LoginEmail;
