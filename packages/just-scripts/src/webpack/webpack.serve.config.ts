import { webpackServeConfig as defaultWebpackServeConfig } from 'just-scripts';
import webpackMerge from 'webpack-merge';
import webpack from 'webpack';

export const webpackServeConfig: webpack.Configuration = webpackMerge(
  defaultWebpackServeConfig as any,
  {}
);
