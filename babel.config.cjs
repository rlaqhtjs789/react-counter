module.exports = {
  presets: [
    ["@babel/preset-env", {
      targets: { node: "current" },
      modules: "commonjs" // 이 부분을 추가하여 ES 모듈을 CommonJS로 변환합니다.
    }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
