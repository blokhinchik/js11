//  HTML TREE !!!

const table = {
  tagName: "table",
  attrs: {
    border: "1",
  },
  children: [
    {
      tagName: "tr",
      children: [
        {
          tagName: "td",
          children: ["1x1"],
        },
        {
          tagName: "td",
          children: ["1x2"],
        },
      ],
    },
    {
      tagName: "tr",
      children: [
        {
          tagName: "td",
          children: ["2x1"],
        },
        {
          tagName: "td",
          children: ["2x2"],
        },
      ],
    },
  ],
};

const body = {
  tagName: "body",
  children: [
    {
      tagName: "div",
      children: [
        {
          tagName: "span",
          children: ["Enter a data please:"],
        },
        {
          tagName: "br",
        },
        {
          tagName: "input",
          attrs: {
            type: "text",
            id: "name",
          },
        },
        {
          tagName: "input",
          attrs: {
            type: "text",
            id: "surname",
          },
        },
      ],
    },
    {
      tagName: "div",
      children: [
        {
          tagName: "button",
          attrs: {
            id: "ok",
          },
          children: ["OK"],
        },
        {
          tagName: "button",
          attrs: {
            id: "cancel",
          },
          children: ["Cancel"],
        },
      ],
    },
  ],
};

// function htmlTree(parent) {
//   let str = "";
//   for (let key in parent) {
//     if (key === "tagName") {
//       str += "<";
//       str += parent.tagName;
//       if (parent.attrs) {
//         for (const attr in parent.attrs) {
//           str += ` ${attr} = "${parent.attrs[attr]}"`;
//         }
//       }
//       str += ">";
//       if (parent.children) {
//         if (parent.children.length > 1) {
//           for (const child of parent.children) {
//             str += htmlTree(child);
//           }
//         } else {
//           str += `'${parent.children[0]}'`;
//         }
//       }
//       str += `</${parent.tagName}>`;
//     }
//   }
//   return str;
// }

// document.write(htmlTree(table));
// const br = document.createElement("br");
// document.body.append(br);
// document.write(htmlTree(body));

// РЕКУРСИЯ: DOM TREE !!!

// function domTree(parent, container) {
//   for (let key in parent) {
//     if (key === "tagName") {
//       const tagName = `${parent.tagName}`;
//       const tag = document.createElement(tagName);
//       if (parent.attrs) {
//         for (const attr in parent.attrs) {
//           const attrName = `${attr}`;
//           tag[attrName] = `"${parent.attrs[attr]}"`;
//         }
//       }
//       if (parent.children) {
//         if (parent.children.length > 1) {
//           for (const child of parent.children) {
//             domTree(child, tag);
//           }
//         } else {
//           tag.innerText = `'${parent.children[0]}'`;
//         }
//       }
//       container.append(tag);
//     }
//   }
// }

// domTree(table, document.body);
// domTree(body, document.body);

// Рекурсия: DEEP COPY !!!

let deepCopy = (obj) => {
  const clone = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object") {
        clone[key] = deepCopy(obj[key]);
      } else {
        clone[key] = obj[key];
      }
    }
  }
  return clone;
};

const arr = [
  1,
  "string",
  null,
  undefined,
  { a: 15, b: 10, c: [1, 2, 3, 4], d: undefined, e: true },
  true,
  false,
];

// const arr2 = deepCopy(arr); //arr2 та всі його вкладені масиви та об'єкти - інші об'єкти, які можна змінювати без ризику поміняти щось у arr
// const table2 = deepCopy(table); // Аналогічно
// arr2[0] = 2;
// console.log(arr);
// console.log(table2);

// MY STRINGIFY !!!

const stringify = (obj) => {
  if (typeof obj === "string") {
    return `"${obj}"`;
  } else if (Array.isArray(obj)) {
    let res = `[`;
    for (let i = 0; i < obj.length; i++) {
      if (typeof obj[i] !== "undefined") {
        res += stringify(obj[i]);
        if (i < obj.length - 1) {
          res += `,`;
        }
      }
    }
    res += `]`;
    return res;
  } else if (typeof obj === "object" && obj !== null) {
    let res = `{`;
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = stringify(obj[key]);
      if (value !== "undefined") {
        res += `"${key}": ${value}`;
        if (i < keys.length - 1) {
          res += ",";
        }
      }
    }
    res += `}`;
    return res;
  } else {
    return `` + obj;
  }
};

const jsonString = stringify(arr);
console.log(JSON.parse(jsonString));

// Рекурсія: getElementById throw !!!

function getElementById(idToFind) {
  function walker(parent) {
    if (parent.id === idToFind) {
      throw parent;
    }
    for (const child of parent.children) {
      walker(child);
    }
  }
  try {
    walker(document.body);
  } catch (found) {
    return found;
  }
  return null;
}
