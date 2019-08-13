import { webpackConfig as defaultWebpackConfig } from 'just-scripts';
import webpackMerge from 'webpack-merge';
import webpack from 'webpack';

export const webpackConfig: webpack.Configuration = webpackMerge(defaultWebpackConfig as any, {});
