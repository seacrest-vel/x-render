import { Component } from "./component";


export function evaluate(template: string, obj?: Object) {
  let result = template;

  if (obj) {
    Object.entries(obj).forEach(([key, value]) => {
      result = result.replace(new RegExp(`{${key}}`, "g"), value.toString())
    })
  }

  return result;
}

export function applyComponents(...names: string[]): Component[] {
  return names.map((name) => new Component(name));
}