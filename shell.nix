{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  nativeBuildInputs = with pkgs.buildPackages; [ corepack nodePackages.npm nodePackages.webpack nodePackages.webpack-cli ];
}
