import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  BsReverseLayoutTextSidebarReverse,
  BsLayoutSidebarInsetReverse,
} from "react-icons/bs";
import styles from "./styles.module.scss";
import TimeAgo from "timeago-react"; // var TimeAgo =
import { SettingsReduxType } from "redux/store";
import { SettingsActions } from "redux/slice/settings";
import { useAppDispatch, useAppSelector } from "redux/hooks";

interface IProps {
  collapsible: boolean;
  setCollapseSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function NavBar(data: IProps) {
  const [showNav, setShowNav] = useState(false);
  const dispatch = useAppDispatch();
  const redux_settings = useAppSelector(SettingsReduxType);

  return (
    <div className={styles.navbar}>
      <div
        onClick={() => {
          dispatch(SettingsActions.sidebar(!redux_settings.isSidebarOpen));
          console.log("Clicked Button", redux_settings.isSidebarOpen);
        }}
      >
        {redux_settings.isSidebarOpen ? (
          <BsReverseLayoutTextSidebarReverse />
        ) : (
          <BsLayoutSidebarInsetReverse />
        )}
      </div>
      <div>
        <p>Username</p>
      </div>
      <div>
        <p>Amount Sold So far</p>
      </div>
      <div>
        <p>
          Logged in:
          <TimeAgo live={false} datetime={Date.now()} />
        </p>
      </div>
      <div>
        <p>
          Created:
          <TimeAgo live={false} datetime={Date.UTC(2023, 7, 27)} />
        </p>
      </div>
      <div className={styles.theme}>
        <p>Dark Mode</p>
        {/* <BsLightbulb /> */}
      </div>
    </div>
  );
}
