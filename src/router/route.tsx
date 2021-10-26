import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { IconType } from "react-icons";
import { FiHome, FiTrendingUp, FiStar } from "react-icons/fi";
import DragAndDrop from "../pages/dragAndDrop/DragAndDrop";

const Dummy = () => {
  return <div>dummy page</div>;
};

const Components = {
  DragAndDrop: DragAndDrop,
  Dummy: Dummy,
};

export interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
  component: keyof typeof Components;
}

// ルーティングするページ情報をここに格納する
export const LinkItems: Array<LinkItemProps> = [
  {
    name: "Home",
    icon: FiHome,
    component: "DragAndDrop",
    path: "/",
  },
  {
    name: "Drag&Drop",
    icon: FiTrendingUp,
    component: "DragAndDrop",
    path: "/drag-and-drop",
  },
  { name: "ダミー", icon: FiStar, component: "Dummy", path: "/dummy" },
];

export const RoutePage = () => {
  console.debug("routePage rendering");
  return (
    <Switch>
      {LinkItems.map((link, index) => {
        const Component = Components[link.component];
        return (
          <Route exact={link.path === "/"} path={link.path} key={index}>
            <div>{link.path} </div>
            <Component />
          </Route>
        );
      })}
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};
