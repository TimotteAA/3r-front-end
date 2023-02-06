import styles from "@/styles/layout.module.css";

export interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-blue-400">
      <div className="m-auto bg-slate-50 rounded-lg w-3/5 h-3/4 grid lg:grid-cols-2">
        <div className={styles.imgContainer}>
          <div className={styles.people}></div>
          <div className={styles.cloud1}></div>
          <div className={styles.cloud2}></div>
        </div>
        <div className="right flex flex-col justify-evenly">
          <h1 className="text-center cursor-pointer px-2 py-3">
            还没有注册？赶紧注册吧
          </h1>
          <div className="text-center py-10">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
