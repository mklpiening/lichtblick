// SPDX-FileCopyrightText: Copyright (C) 2023-2024 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { PaletteOptions } from "@mui/material/styles";
import { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface Palette {
    name: string;
    appBar: {
      main: CSSProperties["color"];
      primary: CSSProperties["color"];
      text: CSSProperties["color"];
    };
  }
  interface PaletteOptions {
    name: string;
    appBar: {
      main: CSSProperties["color"];
      primary: CSSProperties["color"];
      text: CSSProperties["color"];
    };
  }
  interface TypeBackground {
    menu: CSSProperties["color"];
  }
}

export const dark: PaletteOptions = {
  name: "dark",
  mode: "dark",
  tonalOffset: 0.15,
  appBar: {
    main: "#0e1018",
    primary: "#1e232e",
    text: "#e7ecf2",
  },
  primary: { main: "#6d6e71" },
  secondary: { main: "#454c5a" },
  error: { main: "#ee8277" },
  warning: { main: "#f2a963" },
  success: { main: "#9afbb3" },
  info: { main: "#84b6ee" },
  text: {
    primary: "#e1e1e4",
    secondary: "#dddddd",
  },
  divider: "#2f363e",
  background: {
    default: "#0e1018",
    paper: "#02040b",
    menu: "#1e232e",
  },
  grey: {
    50: "#0d1016",
    100: "#13171f",
    200: "#161b24",
    300: "#1e232e",
    400: "#262c38",
    500: "#2e3542",
    600: "#363e4d",
    700: "#3f4757",
    800: "#495161",
    900: "#545d6e",
    A100: "#262c38",
    A200: "#2e3542",
    A400: "#3f4757",
    A700: "#545d6e",
  },
};

export const light: PaletteOptions = {
  name: "light",
  mode: "light",
  tonalOffset: 0.22,
  appBar: {
    main: "#ffffff",
    primary: "#2f363d",
    text: "#2f363d",
  },
  primary: { main: "#6d6e71" },
  secondary: { main: "#454c5a" },
  error: { main: "#ed7568" },
  warning: { main: "#e79d56" },
  success: { main: "#56b365" },
  info: { main: "#4d7fbb" },
  background: {
    default: "#ffffff",
    paper: "#f6f8fa",
    menu: "#ffffff",
  },
  text: {
    primary: "#393939",
    secondary: "#6f6d79",
  },
  divider: "#e1e4e8",
  grey: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#d5d5d5",
    A200: "#aaaaaa",
    A400: "#616161",
    A700: "#303030",
  },
};
