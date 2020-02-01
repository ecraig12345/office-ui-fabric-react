import { mod } from 'riceburn';
import ts from 'typescript';

export function postprocessAmdTask() {
  mod('lib-amd/**/*.js').asTypescript((node, modder) => {
    if (ts.isIfStatement(node)) {
      if (node.expression.getText().includes('process.env')) {
        return modder.remove(node);
      }
    }
  });
}
