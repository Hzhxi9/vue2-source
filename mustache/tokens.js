const mustache = require("./mustache");

const template = `
  <ul>
    {{#arr}}
      <li>
        <div class="hd">{{name}}的基本信息</div>
        <div class="bd">
          <p>姓名：{{name}}</p>
          <p>性别：{{sex}}</p>
          <p>年龄：{{age}}</p>
        </div>
      </li>
    {{/arr}}
  </ul>
`;

mustache.render(template, {});
