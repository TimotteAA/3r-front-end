import { useState, useEffect } from "react";
import { Form, Input, Button, Select } from "@arco-design/web-react";
import Captcha from "./captcha";

import countryCode from "@/public/country-code.json";

const code = countryCode.map((c) => c.code);
const FormItem = Form.Item;

function CustomInput(props: any) {
  const [stateValue, setValue] = useState(props.value);
  const value = props.value || stateValue || {};
  useEffect(() => {
    if (props.value !== stateValue && props.value === undefined) {
      setValue(props.value);
    }
  }, [props.value]);

  const handleChange = (newValue: any) => {
    if (!("value" in props)) {
      setValue(newValue);
    } // onChange is passed in by Form.Item and will update the fields bound to the form when triggered.

    props.onChange && props.onChange(newValue);
  };

  return (
    <Input
      value={value.input}
      onChange={(v) => {
        handleChange({ ...value, input: v });
      }}
      style={{ width: "80%" }}
      addBefore={
        <Select
          error={props.error}
          placeholder="+86"
          style={{ width: 100 }}
          value={value.select}
          options={code}
          onChange={(v) => {
            handleChange({ ...value, select: v });
          }}
        />
      }
    />
  );
}

const LoginPhone = () => {
  return (
    <>
      <Form
        style={{
          width: "100%",
        }}
        layout={"vertical"}
        size="large"
        validateTrigger={"onChange"}
      >
        <Form.Item
          rules={[
            {
              required: true,
            },
            {
              validator: (val, cb) => {
                const reg = /^\d+$/;
                if (!reg.test(val.input)) {
                  return cb("手机号码仅能由数字组成");
                }
                return cb();
              },
            },
          ]}
          label="手机"
          field="phone"
        >
          <CustomInput />
        </Form.Item>
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

export default LoginPhone;
