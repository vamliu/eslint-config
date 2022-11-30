module.exports = {
     "accessor-pairs": ["error", {
          "getWithoutSet": true, "setWithoutGet": true, "enforceForClassMembers": true
      }], // get和set必须成对出现
      "array-bracket-newline": ["error", { "multiline": true }], // 数组括号后换行一致
      "array-bracket-spacing": ["error", "never"], // 数组括号后空格一致
      "array-callback-return": ["error", { checkForEach: true }],// 数组函数回调必须有return值,忽略forEach
      "array-element-newline": ["error", "consistent"], //数组元素换行一致
      "arrow-body-style": ["error", "as-needed"], // 箭头函数体大括号尽量省略
      "arrow-parens": ["error", "as-needed"],// 箭头函数参数括号尽量省略
      "arrow-spacing": ["error", { "before": false, "after": true }],//箭头函数箭头后加空格
      "block-scoped-var": "error",// 不允许在大括号外使用括号里定义的变量
      "block-spacing": "error",// 大括号后加空格
      "brace-style": ["error", "1tbs", { "allowSingleLine": true }], // if else结构中else 跟上一个大括号同行，允许全部写在同一行
      "camelcase":"off",// 关闭必须驼峰命名规则
      "capitalized-comments": "error",// 注释开头必须大写
      "class-methods-use-this": ["error", { "enforceForClassFields": false }],// 类中没有用到this的方法必须加static，忽略用变量定义的方法
      "comma-dangle": ["error", "never"],// 不尾随逗号
      "comma-spacing": ["error", { "before": false, "after": true }],// 逗号后跟空格
      "comma-style": ["error", "last"],//数组元素、对象属性或变量声明后的同一行上使用逗号
      "complexity": ["error", 3],//代码复杂度阙值3
      "computed-property-spacing": ["error", "never", { "enforceForClassMembers": true }],// 计算属性括号内不加空格
      "consistent-return": ["error", { "treatUndefinedAsUnspecified": true }],// return语句始终或从不指定值
      "consistent-this": ["error", "that"],//this统一重命名为that
      "constructor-super": "error",//存在有效的super()调用
      "curly": "error",// if不省略大括号
      "default-case-last": "error",//switch语句中default放最后
      "default-case": ["error", { "commentPattern": "(no\\s+default)|(无默认)" }],//switch语句要有default或注释表面无default
      "default-param-last": ["error"],//有默认值参数放最后
      "dot-location": ["error", "property"],//点跟属性同一行
      "dot-notation": "error",//对象属性尽量用.号表示
      "eol-last": ["error", "always"],//末尾始终换行(\n)
      "eqeqeq": ["error", "always"],//始终用===比较
      "for-direction": "error",//for语句不无限循环
      "func-call-spacing": ["error", "never"],//函数调用时函数名和括号中无空格或换行
      "func-name-matching": ["error", "always",{ "considerPropertyDescriptor": true }],//函数名和赋值变量名一致
      "func-names": ["error", "as-needed"],//如果未自动分配函数名则必须带上函数名,方便调试
      "func-style": ["error", "expression"],//使用函数表达式
      "function-call-argument-newline": ["error", "consistent"],//函数参数换行一致
      "function-paren-newline": ["error", "multiline"],//函数括号换行一致
      "generator-star-spacing": ["error", {"before": true, "after": false}],//generator函数*前有空格，后无空格
      "getter-return": "error",//getter必须要有return
      "grouped-accessor-pairs": ["error", "getBeforeSet"],//get和set在一起出现，get在前
      "guard-for-in": "error",//for-in循环需要加过滤条件
      "id-denylist":"off",//关闭禁用命名
      "id-length": "off",//关闭命名长度限制
      "id-match":"off",//关闭命名规则匹配
      "implicit-arrow-linebreak": ["error", "beside"],//在箭头函数体之前不允许换行
      "indent": ["error", 2, {//缩进2个空格
          "SwitchCase":1,//switch语句中case子句的缩进级别为1
          "VariableDeclarator": "first", //变量与第一个对齐
          "FunctionDeclaration": {"parameters": "first"},//函数声明参数与第一个参数对齐
          "FunctionExpression":{"parameters": "first"},//函数表达式参数与第一个参数对齐
          "CallExpression":{"parameters": "first"},//函数调用参数与第一个参数对齐
     }],
     "init-declarations": "off",//关闭变量声明时赋值
     "jsx-quotes": ["error", "prefer-double"],//jsx中属性用双引号
     "key-spacing": ["error", {
          "align": {
               "beforeColon": false,
               "afterColon": true,
               "on": "value",
               "mode": "strict"
           },//对齐方式：冒号前无空格，冒号后有空格，多行冒号和值对齐
          "singleLine": {
              "beforeColon": false,
              "afterColon": true
          },
          "multiLine": {
              "beforeColon": false,
              "afterColon": true,
              "align": "value"
          }
      }],//对象与值以冒号对齐
      "keyword-spacing": ["error", { "before": false,"after":false }],//关键词前后不加空格
      "line-comment-position": ["error", { "position": "beside" }],//行注释在代码旁
      "linebreak-style": ["error", "unix"],// lf换行
      "lines-around-comment": ["error", { 
          "beforeBlockComment": true, //块注释前换行
          "afterBlockComment":false,//块注释后不换行
          "allowBlockStart":true,//注释允许出现在代码块开始处
          "allowBlockEnd":false,//注释不允许出现在代码块结尾处
          "allowObjectStart":true,//注释允许出现在对象开始处
          "allowObjectEnd":false,//注释不允许出现在对象结尾处
          "allowArrayStart":false,//注释不允许出现在数组开始处
          "allowArrayEnd":false,//注释不允许出现在数组结尾处
          "allowClassStart":true,//注释允许出现在类开始处
          "allowClassEnd":true,//注释不允许出现在类结尾处
     }],
     "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],//类成员间换行，跳过单行成员
     "logical-assignment-operators": ["error", "never"],//不使用逻辑运算符简写
     "max-classes-per-file": ["error", 1],//每个文件1个类
     "max-depth": ["error", 4],//代码深度4
     "max-len": ["error", { 
          "code": 80,//代码最长80
          "ignoreTrailingComments": true,//忽略跟在后面的注释
          "ignoreUrls": true,//忽略url
          "ignoreStrings": true,//忽略字符串
          "ignoreTemplateLiterals":true,//忽略模板表达式
          "ignoreRegExpLiterals": true //忽略正则
     }],
     "max-lines-per-function": ["error", {
          "max":50,//最大50
          "skipBlankLines":true,//忽略空白行
          "skipComments":true,//忽略注释行
          "IIFEs":false//不包括立即执行函数
     }],//限制方法所包含的行数
     "max-lines": ["error", {
          "max": 500, //最大500
          "skipBlankLines": true,//忽略空白行
          "skipComments":true//忽略注释行
     }]

}
  