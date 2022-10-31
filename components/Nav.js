import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav>
      <Link href="/">nxt.</Link>
      <Link href="/">about.</Link>
      <Link href="/">services.</Link>
      <Link href="/">contact.</Link>
    </nav>
  );
};

export default Nav;
