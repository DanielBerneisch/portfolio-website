import CSS from "./icons/css";
import Figma from "./icons/figma";
import Framer from "./icons/framer";
import Git from "./icons/git";
import Greensock from "./icons/greensock";
import HTML from "./icons/html";
import JavaScript from "./icons/javascript";
import MongoDB from "./icons/mongodb";
import Next from "./icons/next";
import React from "./icons/react";
import Redux from "./icons/redux";
import Supabase from "./icons/supabase";
import Tailwind from "./icons/tailwind";
import Typescript from "./icons/typescript";
import Three from "./icons/three";
import Shopify from "./icons/shopify";
import Dato from "./icons/dato";

import { cn } from "@/lib/utils";
import { JSX } from "react";

type PropsWrapper = {
  isLeadingIcon?: boolean;
  children: React.ReactNode;
};

const Wrapper: React.FC<PropsWrapper> = ({
  children,
  isLeadingIcon,
}): JSX.Element => {
  return (
    <span className={cn({ "order-first": isLeadingIcon })}>{children}</span>
  );
};

interface IconType {
  name: string;
  size?: string;
  id?: number | string;
  height?: string;
}

type PropsIcon = {
  icon: IconType[];
  className?: string;
};

const Icon = ({ icon, className = "" }: PropsIcon): JSX.Element | null => {
  const _icon = icon[0];

  switch (_icon.name) {
    case "css":
      return (
        <Wrapper>
          <CSS className={className} />
        </Wrapper>
      );
    case "figma":
      return (
        <Wrapper>
          <Figma className={className} />
        </Wrapper>
      );
    case "framer":
      return (
        <Wrapper>
          <Framer className={className} />
        </Wrapper>
      );
    case "git":
      return (
        <Wrapper>
          <Git className={className} />
        </Wrapper>
      );
    case "greensock":
      return (
        <Wrapper>
          <Greensock className={className} />
        </Wrapper>
      );
    case "html":
      return (
        <Wrapper>
          <HTML className={className} />
        </Wrapper>
      );
    case "javascript":
      return (
        <Wrapper>
          <JavaScript className={className} />
        </Wrapper>
      );
    case "mongodb":
      return (
        <Wrapper>
          <MongoDB className={className} />
        </Wrapper>
      );
    case "next":
      return (
        <Wrapper>
          <Next className={className} />
        </Wrapper>
      );
    case "react":
      return (
        <Wrapper>
          <React className={className} />
        </Wrapper>
      );
    case "redux":
      return (
        <Wrapper>
          <Redux className={className} />
        </Wrapper>
      );
    case "supabase":
      return (
        <Wrapper>
          <Supabase className={className} />
        </Wrapper>
      );
    case "tailwind":
      return (
        <Wrapper>
          <Tailwind className={className} />
        </Wrapper>
      );
    case "typescript":
      return (
        <Wrapper>
          <Typescript className={className} />
        </Wrapper>
      );
    case "three":
      return (
        <Wrapper>
          <Three className={className} />
        </Wrapper>
      );
    case "shopify":
      return (
        <Wrapper>
          <Shopify className={className} />
        </Wrapper>
      );
    case "dato":
      return (
        <Wrapper>
          <Dato className={className} />
        </Wrapper>
      );
    default:
      return null;
  }
};

export default Icon;
