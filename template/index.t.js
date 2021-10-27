'use strict'

const { Visitor, pluginTools, nodeTypes } = require('postapl');

module.exports = (opts = {}) => {
  // Work with options here

  return {
    postaplPlugin: '${pluginName}',
    async process(result) {

      // pre-visitor processing

      // Choose:

      // 1) navigate nodes directly
      // const propertyNode = result.root.child.properties[1];
      // const key = propertyNode.key.value;
      // const value = propertyNode.value.value;
      // const grandparent = propertyNode.parent.parent;

      // const propertyNode = pluginTools.findNode(result.root, 'import.0.name');
      // const key = propertyNode.key.value;
      // const value = propertyNode.value.value;



      // 2) use a visitor
      const visitor = new PluginVisitor(result);
      result.root.accept(visitor);

      // const visitor = new PluginVisitor(result);
      // const mainTemplateNode = pluginTools.findNode(this.result.root, 'mainTemplate');
      // mainTemplateNode.accept(visitor);



      // 3) or both

      // post-visitor processing
    }
  }
}

module.exports.postapl = true


class PluginVisitor extends Visitor {
  constructor(result) {
    super();
    this.result = result;
  }

  // node(node) {
  //   // if using this listener, likely won't use other listeners
  // }

  // document(documentNode) {
  // }

  // object(objectNode) {
  // }

  // array(arrayNode) {
  // }

  // property(propNode) {
  // }

  // key(keyNode) {
  // }

  // value(valueNode) {
  // }

  // string(stringNode) {
  // }

  // number(numberNode) {
  // }

  // boolean(booleanNode) {
  // }

  // nil(nullNode) {
  // }

  // comment(commentNode) {
  // }

};

// Notes:
// 1. Stop visitor after current node:
//    this.stop = true;
// 2. Add a warning message
//    this.result.warn('message', { node: objectNode });
// 3. Add custom messages. Set type and other properties as you want.
//    this.result.messages.push({
//      type: 'info',
//      key: 'comment',
//      value: commentNode.value,
//      path: commentNode.path,
//      plugin: '${pluginName}'
// });


