import React from "react";

const navigation = [{ title: "Levels" }, { title: "Theory" }, { title: "Practive" }];

export default function Navigation() {
  return (
    <nav>
      {navigation.map(({ title }) => (
        <a href="/#" title={title}>
          {title}
        </a>
      ))}
    </nav>
  );
}
