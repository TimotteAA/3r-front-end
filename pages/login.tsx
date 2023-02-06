import { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "@/layout/login-register.layout";
import { Tabs } from "@arco-design/web-react";
import LoginUserName from "@/components/login/username";
import Phone from "@/components/login/phone";
import Email from "@/components/login/email";

const TabPane = Tabs.TabPane;

export default function Login() {
  const [activeTab, setActiveTab] = useState("username");

  return (
    <Layout>
      <Head>
        <title>注册页</title>
      </Head>
      <div>
        <Tabs activeTab={activeTab} onChange={setActiveTab}>
          <TabPane key="username" title="密码注册">
            <LoginUserName />
          </TabPane>
          <TabPane key="phone" title="手机注册">
            <Phone />
          </TabPane>
          <TabPane key="email" title="邮箱注册">
            <Email />
          </TabPane>
        </Tabs>
      </div>
    </Layout>
  );
}
