import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import banner2 from 'rollup-plugin-banner2';

import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const extensions = ['.js', '.jsx', '.ts', '.tsx']; // 어떤 확장자를 처리 할 지 정함

export default {
  input: './src/index.ts', // 어떤 파일부터 불러올지 정함

  output: [
    {
      file: 'dist/index.js',
      format: 'es',
      sourcemap: true,
    },
  ],
  external: [/@babel\/runtime/],
  plugins: [
    banner2(
      () => `
      'use client'
    /**
     * rollup-plugin-banner2
     */
    `
    ),
    url(), // 미디어 파일을 dataURI 형태로 불러와서 사용 할 수 있게 해줌
    svgr(), // SVG를 컴포넌트로 사용 할 수 있게 해줌
    peerDepsExternal() /* peerDependencies로 설치한 라이브러리들을 external 모듈로 설정
    즉, 번들링된 결과에 포함시키지 않음 */,
    resolve({ extensions }),
    commonjs({
      // CommonJS 형태로 만들어진 모듈도 불러와서 사용 할 수 있게 해줌
      include: 'node_modules/**',
    }),

    babel({
      // Babel을 사용 할 수 있게 해줌
      babelHelpers: 'runtime',
      presets: ['@babel/env', ['@babel/react', { runtime: 'automatic' }], '@babel/typescript'],
      plugins: ['@babel/plugin-transform-runtime'],
      extensions,
    }),
    typescript(),
  ],
};
